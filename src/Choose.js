
import './App.css';



function Choose(props) {
    return (
        <>


            <div className="c_item">
                <div className="single">
                    <img src={props.img}></img>
                </div>
                <h6 className="ch_text">{props.info}</h6>
                <span className="ch-info">{props.information}</span>
            </div>

        </>
    )
}
export default Choose;