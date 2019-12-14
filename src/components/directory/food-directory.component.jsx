import React from 'react';
import MenuItem from '../menu-item/menu-items.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [  {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2017/11/iStock-490305560-1080x675.jpg",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952",
                "link": "food"
              },
              {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "https://via.placeholder.com/600/771796",
                "thumbnailUrl": "https://via.placeholder.com/150/771796",
                "link": "italian"
              },
              {
                "albumId": 1,
                "id": 3,
                "title": "officia porro iure quia iusto qui ipsa ut modi",
                "url": "https://via.placeholder.com/600/24f355",
                "thumbnailUrl": "https://via.placeholder.com/150/24f355" ,
                "link": "mexican"
              },
              {
                "albumId": 1,
                "id": 4,
                "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                "url": "https://via.placeholder.com/600/d32776",
                "thumbnailUrl": "https://via.placeholder.com/150/d32776",
                "link": ""
              },
              {
                "albumId": 1,
                "id": 5,
                "title": "natus nisi omnis corporis facere molestiae rerum in",
                "url": "https://via.placeholder.com/600/f66b97",
                "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
                "link": ""
              },
              {
                "albumId": 1,
                "id": 6,
                "title": "accusamus ea aliquid et amet sequi nemo",
                "url": "https://via.placeholder.com/600/56a8c2",
                "thumbnailUrl": "https://via.placeholder.com/150/56a8c2",
                "link": ""
              },
              {
                "albumId": 1,
                "id": 7,
                "title": "officia delectus consequatur vero aut veniam explicabo molestias",
                "url": "https://via.placeholder.com/600/b0f7cc",
                "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc",
                "link": ""
              }]
        }
    }

    

    render() {
        return (
            <div className="food-listings">
                {/* map through the sections and pass the menu items in */}
                {
                    this.state.sections.map(({title, url, id, link}) =>(
                        <MenuItem title={title} key={id} url={url} link={link}/>
                    ))
                }

                </div>

        );
    }
}


export default Directory;