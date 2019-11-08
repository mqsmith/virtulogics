import React from 'react';

const SideBarNarrow = (props) => {
    return (
        <div>
        <button type="button" class="btn btn-dark" navOpen={props.navOpen} onClick={props.navHandler}>Open</button>
            Small side bar.
        </div>
    );
};

export default SideBarNarrow;