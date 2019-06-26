import React from 'react';
import './ScrollBox.css';
import { IoMdDownload, IoIosCopy } from 'react-icons/io';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

class ScrollBox extends React.Component {

    componentDidUpdate() {
        console.log(this.props.mediaItem);
    }

    downloadVideo(download_url) {
        fetch(download_url, {
            method: 'GET',
            responseType: 'blob',
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.mp4');
            document.body.appendChild(link);
            link.click();
          }).catch((error)=>{
              console.log(error);
          });
    }

    copyURL(tracking_link) {
        var textField = document.createElement('textarea');
        textField.innerText = tracking_link;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        alert(`${tracking_link} Copied to clipboard`);
        textField.remove();
    }

    render() {
        const props = this.props.media;
        if (props !== undefined) {
            return (
                <div className="ScrollBox">
                    {
                        props.map((item, index) => {
                            return (
                                <div key={index} className="Photo">
                                    <div className="PhotoPlayer">
                                        <Player
                                            playsInline
                                            poster={item.cover_photo_url}
                                            src={item.download_url}
                                            fluid={false}
                                            height={250}
                                            width={125}
                                        />
                                    </div>
                                    <IoIosCopy onClick={() => this.copyURL(item.tracking_link)} className="CopyIcon" />
                                    <IoMdDownload onClick={() => this.downloadVideo(item.download_url)} className="DownloadIcon" />
                                </div>
                            );
                        }
                        )
                    }
                </div>
            );
        }

    }
}
export default ScrollBox;