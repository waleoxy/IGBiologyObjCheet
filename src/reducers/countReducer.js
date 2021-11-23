import { useState } from "react";
import { CLICKED_A, CLICKED_B, CLICKED_C, CLICKED_D, SUBTRACT_A, 
SUBTRACT_B,
SUBTRACT_C,
SUBTRACT_D} from "../actions";
import { questionList } from "../context/questionList";

const defaultState = {
    questionList,
    questNo: [],
    count: 0,
    isClicked_A: false,
    isClicked_B: false,
    isClicked_C: false,
    isClicked_D: false,
    isCorrect: false,
}

export const countReducer = (state = defaultState, action) => {
 const options =  state.questionList.ansOptions
 const correctAns = state.questionList.correctAns

 const qNo = questionList.map(que => que.id);

 
    switch (action.type) {
        case CLICKED_A:
            return{
                ...state,
                count: state.count + 1,
                isCorrect: true,
                 questNo: qNo,
            }  
            break;

        case CLICKED_B:
             return{
                ...state,
                count: state.count + 1,
                isCorrect: true,
                 questNo: qNo,
            } 
            break;

        case CLICKED_C:
             return{
                ...state,
                count: state.count + 1,
                isCorrect: true,
                 questNo: qNo,
            }
            break;

        case CLICKED_D:
             return{
                ...state,
                count: state.count + 1,
                isCorrect: true,
                questNo: qNo,
            }
            break;

        case SUBTRACT_A:
             return{
                ...state,
                count: state.count - 1,
                isCorrect: false,
                questNo: qNo,
            }
            break;
        case SUBTRACT_B:
             return{
                ...state,
                count: state.count - 1,
                isCorrect: false,
                questNo: qNo,
            }
            break;
        case SUBTRACT_C:
             return{
                ...state,
                count: state.count - 1,
                isCorrect: false,
                questNo: qNo, 
            }
            break;
        case SUBTRACT_D:
             return{
                ...state,
                count: state.count - 1,
                isCorrect: false,
                questNo: qNo,
            }
            break;
    
        default:
            break;
    }
    return state;
}
  {/*const selected_A = () => {
            setIsClicked_A(!isClicked_A)
            setIsClicked_B(false)
            setIsClicked_C(false)
            setIsClicked_D(false)

            setSelectedAns(A)
            if(selectedAns === correctAns){
                setIsCorrect(true)
            }
        
        }*/}