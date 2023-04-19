import React, { useRef, useEffect } from 'react';
import { Box, Button } from '@material-ui/core';
import Drawflow from 'drawflow';

const DrawflowWrapper = () => {
  const drawflowRef = useRef(null);
  var container = "";
  var editor = "";
  const lock = useRef(null);
  const unlock = useRef(null);

  useEffect(() => {
    // const container = drawflowRef.current;
    const options = {
      nodes: {
        node1: {
          name: 'Start',
          icon: 'fas fa-play-circle',
          html: '<div><i class="fas fa-play-circle"></i><span>Start</span></div>',
          inputs: {},
          outputs: {
            output: {
              name: 'Output',
              type: 'flow',
            },
          },
        },
        node2: {
          name: 'End',
          icon: 'fas fa-stop-circle',
          html: '<div><i class="fas fa-stop-circle"></i><span>End</span></div>',
          inputs: {
            input: {
              name: 'Input',
              type: 'flow',
            },
          },
          outputs: {},
        },
      },
      connections: {
        'node1': {
          'output': {
            node: 'node2',
            input: 'input',
          },
        },
      },
      grid: true,
      gridSize: 20,
      snapToGrid: true,
      zoom: 1,
      zoomMax: 2,
      zoomMin: 0.5,
    };
    
    container = document.getElementById('drawflow');
    editor = new Drawflow(container);

    editor.reroute = true;
    const dataToImport = {"drawflow":{"Home":{"data":{"1":{"id":1,"name":"welcome","data":{},"class":"welcome","html":"\n    <div>\n      <div class=\"title-box\">👏 Welcome!!</div>\n      <div class=\"box\">\n        <p>Simple flow library <b>demo</b>\n        <a href=\"https://github.com/jerosoler/Drawflow\" target=\"_blank\">Drawflow</a> by <b>Jero Soler</b></p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n    </div>\n    ","typenode": false, "inputs":{},"outputs":{},"pos_x":50,"pos_y":50},"2":{"id":2,"name":"slack","data":{},"class":"slack","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-slack\"></i> Slack chat message</div>\n          </div>\n          ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1028,"pos_y":87},"3":{"id":3,"name":"telegram","data":{"channel":"channel_2"},"class":"telegram","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-telegram-plane\"></i> Telegram bot</div>\n            <div class=\"box\">\n              <p>Send to telegram</p>\n              <p>select channel</p>\n              <select df-channel>\n                <option value=\"channel_1\">Channel 1</option>\n                <option value=\"channel_2\">Channel 2</option>\n                <option value=\"channel_3\">Channel 3</option>\n                <option value=\"channel_4\">Channel 4</option>\n              </select>\n            </div>\n          </div>\n          ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1032,"pos_y":184},"4":{"id":4,"name":"email","data":{},"class":"email","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-at\"></i> Send Email </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"}]}},"outputs":{},"pos_x":1033,"pos_y":439},"5":{"id":5,"name":"template","data":{"template":"Write your template"},"class":"template","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-code\"></i> Template</div>\n              <div class=\"box\">\n                Ger Vars\n                <textarea df-template></textarea>\n                Output template with vars\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"6","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"4","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":607,"pos_y":304},"6":{"id":6,"name":"github","data":{"name":"https://github.com/jerosoler/Drawflow"},"class":"github","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-github \"></i> Github Stars</div>\n            <div class=\"box\">\n              <p>Enter repository url</p>\n            <input type=\"text\" df-name>\n            </div>\n          </div>\n          ","typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"5","output":"input_1"}]}},"pos_x":341,"pos_y":191},"7":{"id":7,"name":"facebook","data":{},"class":"facebook","html":"\n        <div>\n          <div class=\"title-box\"><i class=\"fab fa-facebook\"></i> Facebook Message</div>\n        </div>\n        ","typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"2","output":"input_1"},{"node":"3","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":347,"pos_y":87},"11":{"id":11,"name":"log","data":{},"class":"log","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-file-signature\"></i> Save log file </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"},{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1031,"pos_y":363}}},"Other":{"data":{"8":{"id":8,"name":"personalized","data":{},"class":"personalized","html":"\n            <div>\n              Personalized\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"12","input":"output_1"},{"node":"12","input":"output_2"},{"node":"12","input":"output_3"},{"node":"12","input":"output_4"}]}},"outputs":{"output_1":{"connections":[{"node":"9","output":"input_1"}]}},"pos_x":764,"pos_y":227},"9":{"id":9,"name":"dbclick","data":{"name":"Hello World!!"},"class":"dbclick","html":"\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Db Click</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                Db Click here\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"8","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"12","output":"input_2"}]}},"pos_x":209,"pos_y":38},"12":{"id":12,"name":"multiple","data":{},"class":"multiple","html":"\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[]},"input_2":{"connections":[{"node":"9","input":"output_1"}]},"input_3":{"connections":[]}},"outputs":{"output_1":{"connections":[{"node":"8","output":"input_1"}]},"output_2":{"connections":[{"node":"8","output":"input_1"}]},"output_3":{"connections":[{"node":"8","output":"input_1"}]},"output_4":{"connections":[{"node":"8","output":"input_1"}]}},"pos_x":179,"pos_y":272}}}}}
    editor.start();
    editor.import(dataToImport);

    // console.log(editor);
    

    // Add any Drawflow configuration or customization here

    // return () => {
    //   drawflowInstance.destroy();
    // };
  }, []);

  /* DRAG EVENT */

  /* Mouse and Touch Actions */

  var elements = document.getElementsByClassName('drag-drawflow');
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('touchend', drop, false);
    elements[i].addEventListener('touchmove', positionMobile, false);
    elements[i].addEventListener('touchstart', drag, false );
  }

  var mobile_item_selec = '';
  var mobile_last_move = null;
  function positionMobile(ev) {
    mobile_last_move = ev;
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    if (ev.type === "touchstart") {
      mobile_item_selec = ev.target.closest(".drag-drawflow").getAttribute('data-node');
    } else {
    ev.dataTransfer.setData("node", ev.target.getAttribute('data-node'));
    }
  }

  function drop(ev) {
    if (ev.type === "touchend") {
      var parentdrawflow = document.elementFromPoint( mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY).closest("#drawflow");
      if(parentdrawflow != null) {
        addNodeToDrawFlow(mobile_item_selec, mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY);
      }
      mobile_item_selec = '';
    } else {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("node");
      addNodeToDrawFlow(data, ev.clientX, ev.clientY);
    }
  }

  function addNodeToDrawFlow(name, pos_x, pos_y) {
    if(editor.editor_mode === 'fixed') {
      return false;
    }
    pos_x = pos_x * ( editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)) - (editor.precanvas.getBoundingClientRect().x * ( editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)));
    pos_y = pos_y * ( editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)) - (editor.precanvas.getBoundingClientRect().y * ( editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)));


    switch (name) {
      case 'facebook':
      var facebook = `
      <div>
        <div class="title-box"><i class="fab fa-facebook"></i> Facebook Message</div>
      </div>
      `;
        editor.addNode('facebook', 0,  1, pos_x, pos_y, 'facebook', {}, facebook );
        break;
      case 'slack':
        var slackchat = `
        <div>
          <div class="title-box"><i class="fab fa-slack"></i> Slack chat message</div>
        </div>
        `
        editor.addNode('slack', 1, 0, pos_x, pos_y, 'slack', {}, slackchat );
        break;
      case 'github':
        var githubtemplate = `
        <div>
          <div class="title-box"><i class="fab fa-github "></i> Github Stars</div>
          <div class="box">
            <p>Enter repository url</p>
          <input type="text" df-name>
          </div>
        </div>
        `;
        editor.addNode('github', 0, 1, pos_x, pos_y, 'github', { "name": ''}, githubtemplate );
        break;
      case 'telegram':
        var telegrambot = `
        <div>
          <div class="title-box"><i class="fab fa-telegram-plane"></i> Telegram bot</div>
          <div class="box">
            <p>Send to telegram</p>
            <p>select channel</p>
            <select df-channel>
              <option value="channel_1">Channel 1</option>
              <option value="channel_2">Channel 2</option>
              <option value="channel_3">Channel 3</option>
              <option value="channel_4">Channel 4</option>
            </select>
          </div>
        </div>
        `;
        editor.addNode('telegram', 1, 0, pos_x, pos_y, 'telegram', { "channel": 'channel_3'}, telegrambot );
        break;
      case 'aws':
        var aws = `
        <div>
          <div class="title-box"><i class="fab fa-aws"></i> Aws Save </div>
          <div class="box">
            <p>Save in aws</p>
            <input type="text" df-db-dbname placeholder="DB name"><br><br>
            <input type="text" df-db-key placeholder="DB key">
            <p>Output Log</p>
          </div>
        </div>
        `;
        editor.addNode('aws', 1, 1, pos_x, pos_y, 'aws', { "db": { "dbname": '', "key": '' }}, aws );
        break;
      case 'log':
          var log = `
          <div>
            <div class="title-box"><i class="fas fa-file-signature"></i> Save log file </div>
          </div>
          `;
          editor.addNode('log', 1, 0, pos_x, pos_y, 'log', {}, log );
          break;
        case 'google':
          var google = `
          <div>
            <div class="title-box"><i class="fab fa-google-drive"></i> Google Drive save </div>
          </div>
          `;
          editor.addNode('google', 1, 0, pos_x, pos_y, 'google', {}, google );
          break;
        case 'email':
          var email = `
          <div>
            <div class="title-box"><i class="fas fa-at"></i> Send Email </div>
          </div>
          `;
          editor.addNode('email', 1, 0, pos_x, pos_y, 'email', {}, email );
          break;

        case 'template':
          var template = `
          <div>
            <div class="title-box"><i class="fas fa-code"></i> Template</div>
            <div class="box">
              Ger Vars
              <textarea df-template></textarea>
              Output template with vars
            </div>
          </div>
          `;
          editor.addNode('template', 1, 1, pos_x, pos_y, 'template', { "template": 'Write your template'}, template );
          break;
        case 'multiple':
          var multiple = `
          <div>
            <div class="box">
              Multiple!
            </div>
          </div>
          `;
          editor.addNode('multiple', 3, 4, pos_x, pos_y, 'multiple', {}, multiple );
          break;
        case 'personalized':
          var personalized = `
          <div>
            Personalized
          </div>
          `;
          editor.addNode('personalized', 1, 1, pos_x, pos_y, 'personalized', {}, personalized );
          break;
        case 'dbclick':
          var dbclick = `
          <div>
          <div class="title-box"><i class="fas fa-mouse"></i> Db Click</div>
            <div class="box dbclickbox" ondblclick="showpopup(event)">
              Db Click here
              <div class="modal" style="display:none">
                <div class="modal-content">
                  <span class="close" onclick="closemodal(event)">&times;</span>
                  Change your variable {name} !
                  <input type="text" df-name>
                </div>

              </div>
            </div>
          </div>
          `;
          editor.addNode('dbclick', 1, 1, pos_x, pos_y, 'dbclick', { name: ''}, dbclick );
          break;

      default:
    }
  }

  function changeModule(event) {
    var all = document.querySelectorAll(".menu ul li");
      for (var i = 0; i < all.length; i++) {
        all[i].classList.remove('selected');
      }
    event.target.classList.add('selected');
  }

  function changeMode(option) {
  //console.log(lock.id);
  console.log(lock);
    // if(option == 'lock') {
    //   lock.current.style.display = 'none';
    //   unlock.current.style.display = 'block';
    // } else {
    //   lock.current.style.display = 'block';
    //   unlock.current.style.display = 'none';
    // }

  }



  return (
      // <div ref={drawflowRef} style={{ height: '500px', width: '70%',background:"red" }} />
      <Box>
        <Box className="wrapper">
          <Box className="col">
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="facebook">
              <i className="fab fa-facebook"></i><span> Environment</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="slack">
              <i className="fab fa-slack"></i><span> State </span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="github">
              <i className="fab fa-github"></i><span> Reward</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="telegram">
              <i className="fab fa-telegram"></i><span> Broker Account</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="aws">
              <i className="fab fa-aws"></i><span> Models</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="log">
              <i className="fas fa-file-signature"></i><span> Trading</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="google">
              <i className="fab fa-google-drive"></i><span> Features</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="email">
              <i className="fas fa-at"></i><span> Multiple input/output</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="template">
              <i className="fas fa-code"></i><span> ActionSpace</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="multiple">
              <i className="fas fa-code-branch"></i><span> Telegram</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="personalized">
              <i className="fas fa-fill"></i><span> Send Email</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="template">
              <i className="fas fa-code"></i><span> Template</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="dbclick">
              <i className="fas fa-mouse"></i><span> Event logger</span>
            </Box>


          </Box>
          <Box className="col-right" style={{background:"black"}}>
            <Box className="menu" style={{color: "black"}}>
              <ul>
                <li onClick={changeModule} className="selected">Home</li>
                <li onClick={changeModule}>Other Module</li>
              </ul>
            </Box>
            <Box id="drawflow" onDrop={drop} onDragOver={allowDrop}>
              {/* <Box className="btn-export" onClick={Swal.fire({ title: 'Export',
              html: '<pre><code>'+JSON.stringify(editor.export(), null,4)+'</code></pre>'
              })}>Export</Box> */}
              <Box className="btn-clear" onClick={editor.clearModuleSelected}>Clear</Box>
              <Box className="btn-lock">
                <i ref={lock} className="fas fa-lock" onClick={changeMode('lock')}></i>
                <i ref={unlock} className="fas fa-lock-open" onClick={changeMode('unlock')} style={{display:'none'}}></i>
              </Box>
              <Box className="bar-zoom">
                <i className="fas fa-search-minus" onClick={editor.zoom_out}></i>
                <i className="fas fa-search" onClick={editor.zoom_reset}></i>
                <i className="fas fa-search-plus" onClick={editor.zoom_in}></i>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
};

export default DrawflowWrapper;
