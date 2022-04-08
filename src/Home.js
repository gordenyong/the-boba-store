import bobaMaking from './boba-making.png'
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'

function Home() {
    return (
        <div className='intro-section'>
            <img class='boba-making' src={bobaMaking} alt="" />
            <h2 class='story-title'>Our Story</h2>
            <p class='story'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ipsa nihil est itaque perspiciatis architecto modi consequuntur quia eum ducimus iusto distinctio voluptates porro rerum dolores, cupiditate culpa sunt! Aliquid.lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque perferendis nulla sed voluptatibus similique quisquam neque ex vel? Ullam, molestiae necessitatibus. Provident adipisci in placeat unde accusamus ullam esse. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, quisquam totam laborum modi sint at maiores ad, suscipit, doloribus reprehenderit est perferendis magnam aliquam cumque nihil ducimus voluptatem fugiat consequuntur!</p>
            <footer className='home-footer'>
                <div className='copyright'>COPYRIGHT © 2022 THE BOBA STORE. ALL RIGHTS RESERVED.</div>
                <div className='social-media'>
                    <AiFillFacebook />
                    <AiFillTwitterCircle />
                    <AiFillInstagram />
                </div>
            </footer>
        </div>
    )    
}
export default Home