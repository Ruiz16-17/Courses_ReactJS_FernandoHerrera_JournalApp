import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundColor: 'cover',
                    backgroundImage: 'url(https://comotos.co/wp-content/uploads/2017/11/Dominar-400-tumbnail.jpg',

                }}
            >

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>
                <p className="journal__entry-content">
                    Nulla elit dolor nisi fugiat tempor.
                </p>
            </div>

            <div
                className="journal__entry-date-box"
            >
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
