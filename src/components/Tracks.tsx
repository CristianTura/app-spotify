
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { seeTrack } from '../redux/SeeTrack/actions';

export const Tracks = ({ ...props }) => {
 
  const { external_urls, name, album, artists, duration_ms, preview_url } =
    props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const track = {
    externalUrl: external_urls.spotify,
    name,
    albumName: album.name,
    albumDate: album.release_date,
    albumImg: album.images[0].url,
    artistName: artists[0].name,
    duration: duration_ms,
    previewUrl: preview_url,
  }

  const seeDetails = () => {
      dispatch( seeTrack( track) );
      navigate('/track');
  }
  
  // console.log( external_urls.spotify, name,album.name, album.release_date, album.images[1].url, artists[0].name, duration_ms, preview_url)
  return (
    <div className='track p-1 fs-5 pointer' onClick={ seeDetails }>
      <p className=''>
        <span className='pe-1'>
          <i className="fa-solid fa-music"></i>
        </span>{" "}
        {name}
      </p>
    </div>
  );
};
