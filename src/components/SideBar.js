import './css/SideBar.css'

function SideBar(){
    return(
        <div className="sidebar">
            <div className="elements_sidebar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Patient</a></li>
                    <li><a href="">Dentist</a></li>
                    <li><a href="">Schedule</a></li>
                    <li><a href="">Procedures</a></li>
                    <li><a href="">Specialties</a></li>
                    <li><a href="">Health insurance</a></li>
                    <li><a href="">Receptionist</a></li>
                    <li><a href="">Financial</a></li> 
                    <li><a href="">Report</a></li>       
            </ul>
            </div>
        </div>
    )
}

export default SideBar