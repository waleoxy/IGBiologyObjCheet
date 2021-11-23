import React, { useState } from 'react';
import "./QuestionList.css";
import Question from './Question';
import {connect} from "react-redux";
//import { questionList } from '../context/questionList';

function QuestionList({count, questionList, questNo}) {

    const checkAns = () => {

    }

    return (
        <div className="question__list">
            {questionList.map((question) => (
                <div  key={question.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Question
                        key={question.id}
                        id={question.id}
                        image={question.imgUrl}
                        queText={question.text}
                        category={question.category}
                        isImage={question.isImage}
                        ansOptions={question.ansOptions}
                        correctAns={question.correctAns}
                        questNo ={questNo}
                        
                    />
                </div>
            ))}
            <button onClick={checkAns}>Submit</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        count:state.count,
        questionList: state.questionList,
        questNo: state.questNo   
    }
}

const mapDispatchToProps =  (dispatch) =>{
    return{
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
