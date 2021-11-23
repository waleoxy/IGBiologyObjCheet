import React, { useState } from 'react';
import "./Question.css";
import {connect} from "react-redux";
import { ADD, CLICKED_A, CLICKED_B, CLICKED_C, CLICKED_D,
        SUBTRACT_C, SUBTRACT_D, SUBTRACT_A, SUBTRACT_B } from '../actions';

function Question({id, image, queText, isImage, isCorrect,questNo,
    ansOptions, correctAns, subtract_B, subtract_A, subtract_C, subtract_D,
    clicked_A, clicked_B, clicked_C, clicked_D}){

        const [selectedAns, setSelectedAns] = useState('')
        const [isClicked_A, setIsClicked_A] = useState(false)
        const [isClicked_B, setIsClicked_B] = useState(false)
        const [isClicked_C, setIsClicked_C] = useState(false)
        const [isClicked_D, setIsClicked_D] = useState(false) 
        const [correct, setCorrect] = useState(false)
 
        const{A, B, C, D} = ansOptions


        const clk_A  = () => {
            setIsClicked_A(true)
            setIsClicked_B(false)
            setIsClicked_C(false)
            setIsClicked_D(false)

            if(A === correctAns){
                clicked_A()
                setCorrect(true)
            }else if(correct &&  A !== correctAns){
                subtract_A()
                setCorrect(false)
            }
    
        }
      
        const clk_B  = () => {
            setIsClicked_A(false)
            setIsClicked_B(true)
            setIsClicked_C(false)
            setIsClicked_D(false)

            if(B === correctAns){
                clicked_B()
                setCorrect(true)
            }else if(correct &&  B !==  correctAns){
                subtract_B()
                setCorrect(false)
            }

        }
        const clk_C  = () => {
            setIsClicked_A(false)
            setIsClicked_B(false)
            setIsClicked_C(true)
            setIsClicked_D(false)

            
            if(C === correctAns){
                clicked_C()
                setCorrect(true)
            }else if(correct &&  C !==  correctAns){
                subtract_C()
                setCorrect(false)
            }

        }
        const clk_D  = () => {
            setIsClicked_A(false)
            setIsClicked_B(false)
            setIsClicked_C(false)
            setIsClicked_D(true)
            
            if(D === correctAns){
                clicked_D()
                setCorrect(true)
            }else if(correct &&  D !==  correctAns){
                subtract_D()
                setCorrect(false)
            }

        }

        console.log('qN', questNo);

    return (
         <div className="col-12 col-sm-6 col-md-4 col-lg-3 w-max justify-content-center">
        
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 '>
            <div className="card" style={{backgroundColor:"whitesmoke",marginBottom:"9px", width:'42rem'}}>
            {isImage && (<div className="numbering"><p>{id}.</p> <img className="card-img-top"src={image} alt="image"/></div>)}
            
            <div key={id} className="card-body">
                <div className="queDiv">
                    {!isImage &&  (<div className="numbering"> 
                                    <p className="card-text">{id}. {queText}</p>
                                </div>)}                   
                    <div className="options">
                        <span onClick={clk_A} className={isClicked_A ? `option-clicked` : 'option'}>A. {A}</span>
                        <span onClick={clk_B} className={isClicked_B ? `option-clicked` : 'option'}>B. {B}</span>
                        <span onClick={clk_C} className={isClicked_C ? `option-clicked` : 'option'}>C. {C}</span>
                        <span onClick={clk_D} className={isClicked_D ? `option-clicked` : 'option'}>D. {D}</span>
                    </div>
                </div>
            </div>
            </div>
         </div>
         </div>
    )
}


const mapStateToProps = (state) => {
    return{
        count: state.count,
        isClicked_A: state.isClicked_A,
        isClicked_B: state.isClicked_B,
        isClicked_C: state.isClicked_C,
        isClicked_D: state.isClicked_D,
        isCorrect: state.isCorrect,
        questNo:state.questNo,
    }
}

const mapDispatchToProps =  (dispatch) =>{
    return{
        subtract_A: () => dispatch({type:SUBTRACT_A}),
        subtract_B: () => dispatch({type:SUBTRACT_B}),
        subtract_C: () => dispatch({type:SUBTRACT_C}),
        subtract_D: () => dispatch({type:SUBTRACT_D}),
        clicked_A: () => dispatch({type:CLICKED_A}),
        clicked_B: () => dispatch({type:CLICKED_B}),
        clicked_C: () => dispatch({type:CLICKED_C}),
        clicked_D: () => dispatch({type:CLICKED_D})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Question);
