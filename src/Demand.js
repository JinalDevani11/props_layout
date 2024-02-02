const arr_demand = [
    { btn: "Multimedia training institute" },
    { btn: "Web design training institute in katargam" },
    { btn: "Creo parametrics training institute in varachha" },
    { btn: "codeigniter training institute in katargam" },
    { btn: "Programming language course" },
    { btn: "Laravel training institute in surat" },
    { btn: "codeigniter training course" },
    { btn: "Civil engineering training institute in Mota Varachha" },
    { btn: "Android training course" },
    { btn: "Adobe illustrator design" },
    { btn: "PHP training course" },
    { btn: "Best C programming language training institute" },
    { btn: "Android app development company" },
    { btn: "flutter training course" },
    { btn: "C++ programming language course" },
]
function Demand() {
    return (
        <>
            <div className='Container'>
                <div className="all_btns">
                    <h4>Our Demanded Course -</h4>
                    <div className="our_btn">
                        {
                            arr_demand.map((ele, ind) => {
                                return (
                                    <div className="de_courses">
                                        <a href="#">{ele.btn}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="show_more">
                        <a href="#">show more</a>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Demand;