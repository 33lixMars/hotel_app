import viteLogo from '../assets/download (5).png'
import AlugarBtn from './alugarBtn';

function Containers({ className }) {
    return (
        <div className={`container-hotel ${className || ''}`}>
            <h1>Hotel Name</h1>
            <section><img src={viteLogo} alt="Hotel-image" className="hotel-image"/></section>
            <p>Hotel Name: </p>
            <p>Hotel Address: </p>
            <br/>
            <p>Hotel Description: </p>
            <AlugarBtn />
        </div>
    );
}

export default Containers;