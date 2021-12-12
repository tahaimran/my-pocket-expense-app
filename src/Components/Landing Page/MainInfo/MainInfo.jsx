import React from 'react'
import purchasing from '../Images/purchasing.png'
import textMsg from '../Images/textMsg.jpg'
function MainInfo() {
    return (
        <div className='container-fluid MainInfo'>
            <div className="row text-center">
                <div className="col-md-6 left ">
                    <h4>Expense Tracker Business App</h4>
                    <p>My Pocket Business is a free to download app that was built with the small business owner in mind. Create a catalog to showcase your products and services. Connect with your customers easily by using tools to automate, sort and quickly respond to messages.</p>
                    <p>My Pocket can also help medium and large businesses provide customer support and deliver important notifications to customers. Learn more about My Pocket Business API.</p>
                    <img src={purchasing} alt="" srcset="" width="300px" />
                </div>
                <div className="col-md-6 right">
                    <img src={textMsg} className='img-fluid border rounded' alt="" />
                    <h4>Best For Teenagers</h4>
                    <h5>END-TO-END ENCRYPTION</h5>
                    <p>Some of your most personal moments are shared on My Pocket, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even My Pocket.</p>
                </div>
            </div>
        </div>
    )
}
export default MainInfo;