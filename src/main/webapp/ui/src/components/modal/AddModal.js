import React from "react";

const AddModal = props => {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Confirm Submission</h4>
                </div>
                <div className="modal-body">Content</div>
                <div className="modal-footer">
                    <button>Confirm</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )

}

export default AddModal