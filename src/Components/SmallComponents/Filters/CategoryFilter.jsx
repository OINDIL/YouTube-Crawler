import React from 'react'
import { useAllContext } from '../../Context/AllContextAPI';
function CategoryFilter() {
    //? Context API
    const {catergoryCode, setCatergoryCode} = useAllContext()
    const videoCategories = [
        { name: 'Film & Animation', id: '1' },
        { name: 'Autos & Vehicles', id: '2' },
        { name: 'Music', id: '10' },
        { name: 'Pets & Animals', id: '15' },
        { name: 'Sports', id: '17' },
        { name: 'Short Movies', id: '18' },
        { name: 'Travel & Events', id: '19' },
        { name: 'Gaming', id: '20' },
        { name: 'Videoblogging', id: '21' },
        { name: 'People & Blogs', id: '22' },
        { name: 'Comedy', id: '23' },
        { name: 'Entertainment', id: '24' },
        { name: 'News & Politics', id: '25' },
        { name: 'Howto & Style', id: '26' },
        { name: 'Education', id: '27' },
        { name: 'Science & Technology', id: '28' },
        { name: 'Nonprofits & Activism', id: '29' },
        { name: 'Movies', id: '30' },
        { name: 'Anime/Animation', id: '31' },
        { name: 'Action/Adventure', id: '32' }
    ];

    return (
        <div>
            <div className="dropdown">
                <button
                    className="btn btn-warning dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Category: {catergoryCode}
                </button>
                <ul
                    className="dropdown-menu text-center overflow-y-auto p-3"
                    style={{ cursor: "pointer", maxHeight: "500px" }}
                >
                    {videoCategories.map((item,index)=>(
                        <div key={index}>
                            <li>
                            <a className="dropdown-item" onClick={()=>setCatergoryCode(item.id)}>{item.name}</a>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CategoryFilter