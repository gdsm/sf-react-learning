import React, { ChangeEvent, useState, useRef } from 'react';
import JSZip, { folder } from 'jszip'
import { saveAs } from 'file-saver';
import './ImageResizer.css';
import PlaceHolderImage from './resources/placeholder.png'
import BackgroundCanvas from './resources/background.jpg'


const ImageSizeType = {
  iPhone_6_7: '1290 x 2796',
  iPhone_6_5_1: '1242 x 2688',
  // iPhone_6_5_2: '1284 x 2778px',
  // iPhone_6_1: '1179 x 2556',
  // iPhone_5_8_1: '1125 x 2436',
  // iPhone_5_8_2: '1080 x 2340',
  // iPhone_5_8_3: '1170 x 2532',
  iPhone_5_5: '1242 x 2208',
  iPadPro_12_9_6gen: '2048 x 2732',
  iPadPro_12_9_2gen: '2048 x 2732',
  android_phone_port: '1290 x 2293',
  android_phone_land: '2293 x 1290',
  android_tablet_port: '2048 x 3641',
  android_tablet_land: '3641 x 2048'
}

function ImageResizer() {
  const [selectedImage, setSelectedImage] = useState(null);
  let resizedImageFiles = useRef([])
  let originalImageFiles = useRef([])
  const zip = new JSZip()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // MARK: Events
  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    originalImageFiles.current = selectedFiles
    selectedFiles.forEach( file => {
      console.log("Reading file : " + file.name)
      const reader = new FileReader();
      reader.onload = () => {
        // Use reader.result to access the data URL
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file); // Read the file as data URL
    }) 
  };

  const resizeiPhoneAppStoreScreenshots = () => {
    resizeImages([ImageSizeType.iPhone_5_5, ImageSizeType.iPhone_6_5_1, ImageSizeType.iPhone_6_7])
  }

  const resizeiPadAppStoreScreenshots = () => {
    resizeImages([ImageSizeType.iPadPro_12_9_6gen, ImageSizeType.iPadPro_12_9_2gen])
  }

  const resizeAndroidPlayStorePhoneScreenshots = (isPortrait) => {
    console.log("resizeAndroidPlayStorePhoneScreenshots for " + isPortrait)
    if (isPortrait) {
      resizeImages([ImageSizeType.android_phone_port])
    } else {
      resizeImages([ImageSizeType.android_phone_land])
    }
  }

  const resizeAndroidPlayStoreTabScreenshots = (isPortrait) => {
    console.log("resizeAndroidPlayStoreTabScreenshots for " + isPortrait)
    if (isPortrait) {
      resizeImages([ImageSizeType.android_tablet_port])
    } else {
      resizeImages([ImageSizeType.android_tablet_land])
    }
  }

  const resizeImages = (imageSizes) => {
    var totalImages = imageSizes.length * originalImageFiles.current.length
    imageSizes.map(sizeType => {
      const imgFolder = zip.folder(sizeType);
      var imageCounter = 1
      var width = 0
      var height = 0
      switch (sizeType) {
        case ImageSizeType.iPhone_6_7:
          width = 1290;
          height = 2796;
          break;
        case ImageSizeType.iPhone_6_5_1:
          width = 1242;
          height = 2688;
          break;
        case ImageSizeType.iPhone_5_5:
          width = 1242;
          height = 2208;
          break;
        case ImageSizeType.iPadPro_12_9_6gen:
          width = 2048;
          height = 2732;
          break;
        case ImageSizeType.iPadPro_12_9_2gen:
          width = 2048;
          height = 2732;
          break;
        case ImageSizeType.android_phone_port:
          width = 1290;
          height = 2293;
        break;          
        case ImageSizeType.android_phone_land:
          width = 2293;
          height = 1290;
        break;          
        case ImageSizeType.android_tablet_port:
          width = 2048;
          height = 3641;
        break;
        case ImageSizeType.android_tablet_land:
          width = 3641;
          height = 2048;
        break;
      }
      console.log("Resizing for size = " + width + "," + height)

      originalImageFiles.current.forEach( file => {
        resizeImage(file, width, height, (resImage) => {
          imgFolder.file(`images-${imageCounter}.jpeg`, resImage.split(',')[1], { base64: true });
          imageCounter += 1
          totalImages -= 1
          if (totalImages <= 0) {
            downloadImage()
          }
        })
      });
    })
  }

  // Execution Methods
  const resizeImage = (file, maxWidth, maxHeight, callback) => {
    // let resizedFileName = `${file.name}-${maxWidth}X${maxHeight}`
    const reader = new FileReader();
    reader.onload = (event) => {
      const bgImage = new Image()
      bgImage.src = BackgroundCanvas

      bgImage.onload = () => {
        const image = new Image();
        image.src = event.target?.result;
        
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
  
          // Calculate new width and height
          // let width = image.width;
          // let height = image.height;
          // if (width > height) {
          //   if (width > maxWidth) {
          //     height *= maxWidth / width;
          //     width = maxWidth;
          //   }
          // } else {
          //   if (height > maxHeight) {
          //     width *= maxHeight / height;
          //     height = maxHeight;
          //   }
          // }

          let allowedWidth = maxWidth - 100
          let allowedHeight = maxHeight - 100
          var drawableWidth = image.width
          var drawableHeight = image.height
          var wRatio = 0.95
          var hRatio = 0.95
          var ratio = 0.95

          //if (drawableWidth > allowedWidth) {
            wRatio = (allowedWidth / drawableWidth)
          //}
          //if (drawableHeight > allowedHeight) {
            hRatio = (allowedHeight / drawableHeight)
          //}
          ratio = ((wRatio < hRatio) ? wRatio : hRatio)
          drawableWidth = drawableWidth * ratio
          drawableHeight = drawableHeight * ratio
  
          // Resize image
          canvas.width = maxWidth
          canvas.height = maxHeight
          console.log(`Resized Image ${maxWidth}, ${maxHeight}, ${drawableWidth}, ${drawableHeight}, ${wRatio}, ${hRatio}`)
          context?.drawImage(bgImage, 0, 0, maxWidth, maxHeight)
          context?.drawImage(
            image, 
            Math.round((maxWidth - drawableWidth) * 0.5), 
            Math.round(maxHeight - drawableHeight), 
            Math.round(drawableWidth), 
            Math.round(drawableHeight)
          )
  
          // Get data URL of resized image
          const resizedImageUrl = canvas.toDataURL('image/jpeg');
  
          callback(resizedImageUrl)
  
          // Set resized image URL
          // resizedImageFiles.current += resizedImageUrl
        };
      }
    };
    reader.readAsDataURL(file);
  };

  const downloadImage = () => {
    console.log("Downloading images.")
    zip.generateAsync({ type: "blob" }).then(function(content) {
      // see FileSaver.js
      saveAs(content, "images.zip");
    })
      
    // console.log("Resized Image " +  resizedImageFiles.current.length)
    // resizedImageFiles.current.forEach( file => {
    //   saveAs(file, 'image.jpg') // Put your image URL here.
    // }) 
  }
    // const handleSave = () => {
    //     const canvas = canvasRef.current;
    //     if (!canvas) return;

    //     const context = canvas.getContext('2d');
    //     if (!context) return;

    //     const image = new Image();
    //     image.crossOrigin = 'anonymous'; // Allow loading images from other domains
    //     image.onload = () => {
    //         canvas.width = image.width;
    //         canvas.height = image.height;
    //         context.drawImage(image, 0, 0);

    //         // Convert canvas to blob
    //         canvas.toBlob(blob => {
    //             if (blob) {
    //                 // Create a temporary link element
    //                 const url = window.URL.createObjectURL(blob);
    //                 const link = document.createElement('a');
    //                 link.href = url;
    //                 link.setAttribute('download', fileName);

    //                 // Trigger the download
    //                 document.body.appendChild(link);
    //                 link.click();

    //                 // Clean up
    //                 document.body.removeChild(link);
    //                 window.URL.revokeObjectURL(url);
    //             }
    //         }, 'image/jpeg');
    //     };
    //     image.src = resizedImage as string;
    // };
      
    return (
      <div className='Background'>
        <input className='ImageInput' type="file" multiple accept="image/*" onChange={handleImageChange} />
        {
          selectedImage ? (
            <div>
              <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />
            </div>
          ) : (
            <img className='PlaceHolder' src={PlaceHolderImage} alt="Placeholder" />
          )
        }
        <button className='DownloadButton' onClick={resizeiPhoneAppStoreScreenshots}>Resize iPhone appstore screenshots</button>
        <button className='DownloadButton' onClick={resizeiPadAppStoreScreenshots}>Resize iPad appstore screenshots</button>
        <button className='DownloadButton' onClick={ () => { resizeAndroidPlayStorePhoneScreenshots(true) }}>Resize Android Phone Portrait screenshots</button>
        <button className='DownloadButton' onClick={ () => { resizeAndroidPlayStorePhoneScreenshots(false) } }>Resize Android Phone Landscape screenshots</button>
        <button className='DownloadButton' onClick={ () => { resizeAndroidPlayStoreTabScreenshots(true) } }>Resize Android Tablet Portrait screenshots</button>
        <button className='DownloadButton' onClick={ () => { resizeAndroidPlayStoreTabScreenshots(false) } }>Resize Android Tablet Landscape screenshots</button>
        {/* <button className='DownloadButton' onClick={resizeImages}>Resize appstore icon</button> */}
      </div>
    );
}

export default ImageResizer;