import React, { Component, useState } from 'react'



const Card = ({
    children,
    approveContent,
    rejectContent
}) => {
    return (<div className="ui card">
        <div className="content">{children}</div>
        <div className="extra content">
            <div className="ui two buttons">
                <div
                    className="ui basic green button"
                    onClick={() => approveContent()}
                >Approve</div>
                <div
                    className="ui basic red button"
                    onClick={() => rejectContent()}
                >Reject</div>
            </div>
        </div>
    </div>)
};

const WithApproval = Component => {
    const [approved, setApprove] = useState(undefined);

    const userHasNotApprovedOrReject = () => approved === undefined;
    const approveContent = () => setApprove(true);
    const rejectContent = () => setApprove(false);
    return ({ children }) => {

        return userHasNotApprovedOrReject()
            ? <Component
                approveContent={approveContent}
                rejectContent={rejectContent}
                children={children} />
            : approved ? children : null;
    }

};

const CardWithApproval = WithApproval(Card);

export default CardWithApproval;

/* export class ApprovalCard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isApproved: undefined
        }
    }

    userHasNotApprovedOrReject() {
        return this.state.isApproved === undefined;
    }

    approveContent() {
        this.setState({
            isApproved: true
        });
    }

    rejectContent() {
        this.setState({
            isApproved: false
        });
    }

    renderCard() {
        return (
            <div className="ui card">
                <div className="content">{this.props.children}</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div
                            className="ui basic green button"
                            onClick={() => this.approveContent()}
                        >Approve</div>
                        <div
                            className="ui basic red button"
                            onClick={() => this.rejectContent()}
                        >Reject</div>
                    </div>
                </div>
            </div>
        );
    }

    renderOnlyContent() {
        return this.state.isApproved ? this.props.children : null;
    }

    render() {
        return this.userHasNotApprovedOrReject()
            ? this.renderCard()
            : this.renderOnlyContent();
    }
} */

// Function Component

/* export const ApprovalCard = props => {
 return (
   <div className="ui card">
     <div className="content">{props.children}</div>
     <div className="extra content">
       <div className="ui two buttons">
         <div className="ui basic green button">Approve</div>
         <div className="ui basic red button">Reject</div>
       </div>
     </div>
   </div>
 );
} */
