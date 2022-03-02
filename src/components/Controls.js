import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"
import { Link } from "gatsby"
const Controls = forwardRef(
  (
    {
      onPlayPause,
      playing,
      played,
      onMute,
      muted,
      volume,
    },
    ref
  ) => {


    return (

<>
      {playing ? (
        <>
    
        </>
      ) : (
  <>
  <div style={{position:'absolute', display:'block', background:'#000', height:'60px', width:'100%', zIndex:'', top:'0', right:'0', textAlign:'center', paddingTop:'10px' }}>allin60.com</div>
  <div style={{position:'absolute', display:'block', background:'#000', height:'180px', width:'100%', zIndex:'1', bottom:'0', right:'0', textAlign:'center' }}></div>
  </>
      )}


      <div ref={ref} className="" style={{width:'', height:'', border:'0px solid red', display:'flex', justifyContent:'center', bottom:'20px', position:'absolute', right:'4vw', zIndex:'1', gap:'40px'}}>

      {/* <div className="contact" style={{position:'', bottom:'', zIndex:'',  left:'0', right:'0', display:'flex', justifyContent:'center', width:'200px', margin:'0 auto'}}>
  <Link state={{modal: true}}  to="/contact/" className="navbar-item  button fire" style={{margin:'', textDecoration:'none'}}>Contact Me</Link>
</div> */}
                <div
                  onClick={onPlayPause}
                  className=""
                  style={{
                    position:'relative',
                    zIndex:'',
                    right:'',
                    bottom:'',
                    border:'2px solid ',
                    display:'grid',
                    placeContent:'center',
                    width:'60px',
                    height:'60px',
                    borderRadius:'50px',
                    padding:'10px',
                    opacity: '.8',
                    filter:'drop-shadow(0px 0px 10px #fff)',
                    textShadow:'2px 2px 10px var(--primary-color)',
                    cursor:'pointer',
                }}
                >
                  {/* <MdPlayArrow style={{fontSize:'50px', position:'absolute'}}  /> */}
                  {playing ? (
                    <>
                    <MdPause style={{fontSize:'56px', position:'absolute'}} />
                    </>
                  ) : (
              <>
              <MdPlayArrow style={{fontSize:'56px', position:'absolute'}}  />
              </>
                  )}
                </div>



      




                <div
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                  className=""
                  style={{
                    position:'relative',
                    zIndex:'',
                    right:'',
                    bottom:'',
                    border:'2px solid ',
                    display:'grid',
                    placeContent:'center',
                    width:'60px',
                    height:'60px',
                    borderRadius:'50px',
                    padding:'10px',
                    opacity: '.8',
                    filter:'drop-shadow(0px 0px 10px #fff)',
                    textShadow:'2px 2px 10px var(--primary-color)',
                    cursor:'pointer',
                }}
                >
                  {muted ? (
                    <MdVolumeOff fontSize="large" style={{fontSize:'56px', position:'absolute'}}  />
                  ) : volume > 0.5 ? (
                    <MdVolumeUp fontSize="large" style={{fontSize:'56px', position:'absolute'}}  />
                  ) : (
                    <MdVolumeDown fontSize="large" style={{fontSize:'56px', position:'absolute'}}  />
                  )}
                </div>

      </div>
      
      </>
    );
  }
);

Controls.propTypes = {
  // onSeek: PropTypes.func,
  // onSeekMouseDown: PropTypes.func,
  // onSeekMouseUp: PropTypes.func,
  // onDuration: PropTypes.func,
  // onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  // onFastForward: PropTypes.func,
  // onVolumeSeekDown: PropTypes.func,
  // onChangeDispayFormat: PropTypes.func,
  // onPlaybackRateChange: PropTypes.func,
  // onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  // elapsedTime: PropTypes.string,
  // totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  // playbackRate: PropTypes.number,
};
export default Controls;