import React, {createContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationHeader } from '../commonComponents/navigationHeader';
import { HomeListItem } from './homeListItem';

enum LearningTopics {
    styling = "Styling",
    hooks = "Hooks",
    conditionalRendering = "Conditional Rendering",
    classLifeCycle = "Class Life Cycle",
    contextApi = "Context API",
    errorBoundary = "Error Boundary",
    networkCall = "Network Call",
    database = "Database",
}

// Typedef or Tylealias in TSX
type Learning = {id: number, topic: LearningTopics}
export const treeVariable = createContext('Global tree variable')

export const learningTopics = [
    {id: 1, topic: LearningTopics.styling},
    {id: 2, topic: LearningTopics.hooks},
    {id: 3, topic: LearningTopics.conditionalRendering},
    {id: 4, topic: LearningTopics.classLifeCycle},
    {id: 5, topic: LearningTopics.contextApi},
    {id: 6, topic: LearningTopics.errorBoundary},
    {id: 7, topic: LearningTopics.networkCall},
    {id: 8, topic: LearningTopics.database}
]

export default function Home() {
    const navigate = useNavigate();
    const handleClick = (item: Learning) => {
        switch (item.topic) {
            case LearningTopics.styling:
                console.log("Navigating to Styling page")
                navigate('/styling');
                break;
            case LearningTopics.hooks:
                console.log("Navigating to Hooks page")
                navigate('/hooks');
                break;
            case LearningTopics.conditionalRendering:
                console.log("Learning Conditional Rendering")
                navigate('/conditionalRendering');
                break;
            case LearningTopics.classLifeCycle:
                console.log("Learning Class LifeCycle")
                navigate('/classLifeCycle');
                break;
            case LearningTopics.contextApi:
                console.log("Learning ContextApi")
                navigate('/contextApi');
                break;
            case LearningTopics.errorBoundary:
                console.log("Learning Error Boundary")
                navigate('/errorBoundary');
                break;
            case LearningTopics.networkCall:
                console.log("Learning Network calls")
                break;
            case LearningTopics.database:
                console.log("Learning database")
                break;
            }
    }
    return <nav className='App-List' title='React Learning'>
        <NavigationHeader title={'React Learning'} data-testid="NavigationHeader"></NavigationHeader>
        <treeVariable.Provider value={'Light'}>
            <ul> 
                {
                    learningTopics.map (item => (
                        // Use of key is used by react's virtual DOM , it helps to optimize reloading of contents.
                        <li key={item.id} onClick={() => {handleClick(item)}}>
                            <HomeListItem title={item.topic.valueOf()}></HomeListItem>
                        </li>
                    ))
                }
            </ul>
        </treeVariable.Provider>
    </nav>
    

    // return 
    // </nav>
}