import * as React from 'react'
import '../sass/background.scss';

const BackgroundGuides = () => {
    return (
        <div className="bg-container">
            <div>
                <div className="guides" aria-hidden="true">
                    <div className="guides-container">
                        <div className="guide"></div>
                        <div className="guide"></div>
                        <div className="guide"></div>
                        <div className="guide"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BackgroundGuides
