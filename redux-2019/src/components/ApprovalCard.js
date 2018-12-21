import React from "react";

const ApprovalCard = () => {
    return (
        <div className="ui card">
            <div className="content">
                Elliot requested permission to view your contact details
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;
