//#region ==================== MARK: IMPORTS ====================

import "../stylesheets/App.css";

//#endregion ==================== MARK: IMPORTS ====================


export default function BodyContainer({children}) {
    return (
        <div className='bodyContainer' id='bodyContainerID'>
            {children}
        </div>
    )
}