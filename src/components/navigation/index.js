import './style.css'

function Navigation(){
    return (
        <section>
            <h1 id='nav'> Navigation </h1>
            <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&usqp=CAU' />
            <form>
                <input type="search" />
            </form>
            <section>
                <div>
                    <img className='icon' src="/home.png" />
                    <span>Home</span>
                </div>
                <div>
                    <img className='icon' src="/people.png" />
                    <span>My Network</span>
                </div>
                <div>
                    <img className='icon' src="/black-suitcase.png" />
                    <span>Jobs</span>
                </div>
                <div>
                    <img className='icon' src="/chat.png" />
                    <span>Messaging</span>
                </div>
                <div>
                    <img className='icon' src="/notification.png" />
                    <span>Notifications</span>
                </div>
            </section>
        </section>
    )
}
export default Navigation; // to allow other files to see this function