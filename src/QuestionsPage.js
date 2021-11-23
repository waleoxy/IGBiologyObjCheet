import React from 'react';
import "./QuestionsPage.css";
import {bannerImage} from "./context/bannerImage"
import QuestionList from './components/QuestionList';
import {connect} from "react-redux"


function QuestionsPage({count}) {

    return ( 

        <div className="container-fluid ">
            <div className="row flex justify-evenly">
                <div className="leftside col-12 col-sm-6 col-md-4 col-lg-3">
                    <h5 className="topics__header">All topics categories</h5>
                    <div className="topics__container">
                    {bannerImage.map(data => (
                        <ul className="topics" key={data.id}>
                            <li className="topic">
                                {data.name}
                            </li>
                        </ul>
                    
                    ))}
                    </div>
                </div>
                <div className="middleside col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="d-flex justify-content-between">
                        <h5 className="topics__header">All topics categories</h5>
                        <h5>{count}</h5>
                    </div>
                    <QuestionList/>
                </div>
               <div className="rightside">
               </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
   return {count: state.count,}
}

export default connect(mapStateToProps) (QuestionsPage)
