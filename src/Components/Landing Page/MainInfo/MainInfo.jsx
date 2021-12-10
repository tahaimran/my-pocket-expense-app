import React from 'react'
import purchasing from '../Images/purchasing.png'
import textMsg from '../Images/textMsg.jpg'
function MainInfo() {
    return (
        <div className='container-fluid MainInfo'>
            <div className="row text-center">
                <div className="col-md-6 left ">
                    <h3>Chat App Business App</h3>
                    <p>Chat App Business is a free to download app that was built with the small business owner in mind. Create a catalog to showcase your products and services. Connect with your customers easily by using tools to automate, sort and quickly respond to messages.</p>
                    <p>Chat App can also help medium and large businesses provide customer support and deliver important notifications to customers. Learn more about Chat App Business API.</p>
                    <img src={purchasing} alt="" srcset="" width="300px" />
                </div>
                <div className="col-md-6 right">
                    <img src={textMsg} className='img-fluid border rounded' alt="" />
                    <h3>Security by Default</h3>
                    <h5>END-TO-END ENCRYPTION</h5>
                    <p>Some of your most personal moments are shared on Chat App, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even Chat App.</p>
                </div>
            </div>
        </div>
    )
}
export default MainInfo;