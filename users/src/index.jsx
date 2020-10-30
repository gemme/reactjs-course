import React from 'react';
import ReactDOM from 'react-dom';
import { CommentRow } from './components/CommentRow';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

const { firstName, jobTitle } = faker.name;
const { avatar } = faker.image;
const { weekday } = faker.date;

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentRow
                    author={'Sarai'}
                    avatar={avatar()}
                    time={'8:00pm'}
                    comment={'hello world'}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentRow
                    author={firstName()}
                    avatar={avatar()}
                    time={weekday()}
                    comment={jobTitle()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentRow
                    author={firstName()}
                    avatar={avatar()}
                    time={weekday()}
                    comment={jobTitle()}
                />
            </ApprovalCard>
            
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));
