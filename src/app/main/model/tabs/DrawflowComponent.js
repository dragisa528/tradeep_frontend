import React, { useRef, useEffect } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import Drawflow from 'drawflow';
import { result } from 'lodash';

const DrawflowWrapper = () => {
  const drawflowRef = useRef(null);
  var container = "";
  var editor = "";
  const lock = useRef(null);
  const unlock = useRef(null);
  var dataToImport = "";
  var lastDataToImport = [];
  var undoCount = 0;
  var redoCount = 0;

  useEffect(() => {
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
    dataToImport = {
      "drawflow": {
          "Home": {
              "data": {
                  "1": {
                      "id": 1,
                      "name": "welcome",
                      "data": {},
                      "class": "welcome",
                      "html": "\n    <div>\n      <div class=\"title-box\">👏 Welcome!!</div>\n      <div class=\"box\">\n        <p>Simple flow library <b>demo</b>\n        <a href=\"https://github.com/jerosoler/Drawflow\" target=\"_blank\">Drawflow</a> by <b>Jero Soler</b></p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n    </div>\n    ",
                      "typenode": false,
                      "inputs": {},
                      "outputs": {},
                      "pos_x": 500,
                      "pos_y": 50
                  },
              }
          },
      }
  }
    editor.start();
    editor.import(dataToImport);

    const handleModuleChanged = (name) => {
      console.log(`Module Changed ${name}`);
    }
    // Events!
    editor.on('moduleChanged', handleModuleChanged);
    editor.on('nodeMoved', function () {
      lastDataToImport.push(editor.export());
      undoCount = lastDataToImport.length - 1;
    })

    editor.on('connectionCreated', function () {
      lastDataToImport.push(editor.export());
      undoCount = lastDataToImport.length - 1;
    })

    editor.on('nodeRemoved', function() {
      console.log(editor.export());
      lastDataToImport.push(editor.export());
      undoCount = lastDataToImport.length - 1;
    })

    // return () => {
    //   editor.off('moduleChaged', handleModuleChanged);
    // }
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
    lastDataToImport.push(editor.export());
    undoCount = lastDataToImport.length - 1;
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
      case 'environment':
      var environment = `
        <div>
          <div class="title-box"><i class="fa-solid fa-seedling"></i> Environment</div>
          <div class="box">
            <select>
              <option value="crypto">Crypto</option>
              <option value="stock_ETF">Stocks & ETF</option>
              <option value="indices">Indices</option>
              <option value="forex">Forex</option>
              <option value="commodities">Commodities</option>
            </select>
          </div>
        </div>
      `;
        editor.addNode('environment', 0,  1, pos_x, pos_y, 'environment', {}, environment );
        break;
      case 'state':
        var state = `
          <div>
            <div class="title-box"><i class="fas fa-business-time"></i> State</div>
            <div class="box">
              <select>
                <option value="forexbrocker_a">ForexBroker A</option>
                <option value="1m">1M</option>
                <option value="5m">5M</option>
                <option value="15m">15M</option>
                <option value="30m">30M</option>
                <option value="1h">1H</option>
                <option value="4h">4H</option>
                <option value="1d">1D</option>
              </select>
            </div>
          </div>
        `
        editor.addNode('state', 1, 0, pos_x, pos_y, 'state', {}, state );
        break;
      case 'reward':
        var reward = `
          <div>
            <div class="title-box"><i class="fas fa-medal"></i> Reward</div>
            <div class="box">
              <select>
                <option value="sharp_reward_a">Sharp Reward A</option>
                <option value="profit_reward_b">ProfitReward B</option>
                <option value="mini_drawdown">MiniDrawdown</option>
              </select>
            </div>
          </div>
        `;
        editor.addNode('reward', 0, 1, pos_x, pos_y, 'reward', {}, reward );
        break;
      case 'broker_account':
        var broker_account = `
        <div>
          <div class="title-box"><i class="fa-regular fa-user"></i> Broker Account</div>
          <div class="box">
            <select>
              <option value="forex_brocker_a">ForexBroker A</option>
              <option value="stock_brocker_b">Stock Broker B</option>
            </select>
          </div>
        </div>
        `;
        editor.addNode('broker_account', 1, 0, pos_x, pos_y, 'broker_account', {}, broker_account );
        break;
      case 'models':
        var models = `
          <div>
            <div class="title-box"><i class="fa fa-tasks"></i> Models</div>
            <div class="box">
              <select>
                <option value="rl">RL</option>
                <option value="ml">ML</option>
                <option value="supervised">SuperVised</option>
              </select>
            </div>
          </div>
        `;
        editor.addNode('models', 1, 1, pos_x, pos_y, 'models', {}, models );
        break;
      case 'agents':
          var agents = `
            <div>
              <div class="title-box"><i class="fa fa-building"></i> Agents</div>
              <div class="box">
                <select>
                  <option value="ppo">PPO</option>
                  <option value="sac">SAC</option>
                  <option value="ddpg">DDPG</option>
                  <option value="multiAgent_ddpg">Multi-Agent DDPG</option>
                  <option value="a2c">A2C</option>
                  <option value="td3">TD3</option>
                </select>
              </div>
            </div>
          `;
          editor.addNode('agents', 1, 0, pos_x, pos_y, 'agents', {}, agents );
          break;
        case 'event_logger':
          var event_logger = `
          <div>
            <div class="title-box"><i class="fas fa-file-alt"></i> Event Logger </div>
          </div>
          `;
          editor.addNode('event_logger', 1, 0, pos_x, pos_y, 'event_logger', {}, event_logger );
          break;
        case 'email':
          var email = `
            <div>
              <div class="title-box"><i class="fa-duotone fa-at"></i> Send Email </div>
            </div>
          `;
          editor.addNode('email', 1, 0, pos_x, pos_y, 'email', {}, email );
          break;

        case 'action_space':
          var action_space = `
            <div>
              <div class="title-box"><i class="fab fa-buysellads"></i> ActionSpace</div>
              <div class="box">
                <select>
                  <option value="buy_sell_move2break">Buy,Sell-Move2Break</option>
                  <option value="buy_sell_hold">Buy, Sell, Hold</option>
                </select>
              </div>
            </div>
          `;
          editor.addNode('action_space', 1, 1, pos_x, pos_y, 'action_space', {}, action_space );
          break;
        case 'features':
          var features = `
            <div>
              <div class="title-box"><i class="fas fa-rocket"></i> Features</div>
              <div class="box">
                <select>
                  <option value="ma9">MA9</option>
                  <option value="ma21">MA21</option>
                  <option value="vwap">VWAP</option>
                  <option value="bbands">BBands</option>
                  <option value="heniken_hashi">Heniken Hashi</option>
                  <option value="renko">Renko</option>
                  <option value="td3">TD3</option>
                </select>
              </div>
            </div>
          `;
          editor.addNode('features', 3, 4, pos_x, pos_y, 'features', {}, features );
          break;
        case 'social_channels':
          var social_channels = `
            <div>
              <div class="title-box"><i class="fa-brands fa-telegram"></i> Social Channels</div>
              <div class="box">
                <select>
                  <option value="email">email</option>
                  <option value="telegram">telegram</option>
                  <option value="discord">discord</option>
                  <option value="whatsapp">whatsapp</option>
                </select>
              </div>
            </div>
          `;
          editor.addNode('social_channels', 1, 1, pos_x, pos_y, 'social_channels', {}, social_channels );
          break;
        case 'template':
          var template = `
            <div>
              <div class="title-box"><i class="fa-solid fa-code"></i> Template</div>
              <div class="box">
                Ger Vars
                <textarea df-template></textarea>
                Output template with vars
              </div>
            </div>
          `;
          editor.addNode('template', 1, 1, pos_x, pos_y, 'template', { "template": 'Write your template'}, template );
          break;

      default:
    }
  }

  function undo() {
    console.log(undoCount);
    redoCount = undoCount;
    if (undoCount >= 0 && lastDataToImport.length > 0) {
      editor.clear();
      editor.import(lastDataToImport[undoCount]);
      undoCount--;
    }
    if (undoCount < 0) {
      undoCount = 0;
    }
  }

  function redo() {
    undoCount = redoCount-1;
    if (redoCount < lastDataToImport.length - 1) {
      redoCount++;
      editor.import(lastDataToImport[redoCount]);
    }
  }

  function changeModule(event) {
    lastDataToImport = [];
    undoCount = 0;
    var all = document.querySelectorAll(".menu ul li");
    for (var i = 0; i < all.length; i++) {
      all[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
    editor.changeModule(event.target.getAttribute('module-name'));
  }

  function changeMode(option) {
  //console.log(lock.id);
    if(option == 'lock') {
      editor.editor_mode='fixed';
      lock.current.style.display = 'none';
      unlock.current.style.display = 'block';
    } else {
      editor.editor_mode='edit';
      lock.current.style.display = 'block';
      unlock.current.style.display = 'none';
    }
  }

  const handleClearModule = () => {
    editor.clearModuleSelected();
  }

  const handleExport = () => {
    Swal.fire({ title: 'Export',
      html: '<pre><code>'+JSON.stringify(editor.export(), null,4)+'</code></pre>'
    })
  }

  const handleZoomOut = () => {
    editor.zoom_out();
  }

  const handleZoomIn = () => {
    editor.zoom_in();
  }

  const handleZoomReset = () => {
    editor.zoom_reset();
  }

  const tabRemove = (event) => {
    Swal.fire({
      title: "Are you sure?",
      icon: 'success',
      confirmButtonText: 'Sure'
    })
    .then((result) => {
      if (result.isConfirmed) {
        var tabName = event.target.getAttribute('module-name');
        var tab = document.getElementById(tabName);
        tab.parentNode.removeChild(tab);
        // dataToImport.deletedModule = dataToImport.drawflow[tabName];
        // delete dataToImport.drawflow[tabName];
        // console.log(dataToImport.drawflow);
      }
    })
  }

  const addModule = () => {
    Swal.fire({
      title: "Add New Tab",
      html: '<input placeholder="Input tag name..." id="add_new_tab" margin="normal" />'
    })
    .then((result) => {
      if (result.isConfirmed) {
        var tabName = document.getElementById("add_new_tab").value;
        if (tabName) {
          if (dataToImport.drawflow[tabName]) {
            Swal.fire({
              title: "A tab with the same name already exists.",
              icon: 'warning'
            })
          } else {
            var tabData = {data: {}};
            lastDataToImport.push(editor.export());
            lastDataToImport[lastDataToImport.length-1].drawflow[tabName] = tabData;
            const newHTMLNode = document.createElement("li");
            newHTMLNode.addEventListener('click', changeModule);
            newHTMLNode.setAttribute("module-name", tabName);
            newHTMLNode.setAttribute("id", tabName);
            newHTMLNode.innerHTML = tabName + ' <button class="tab-remove"><img class="tab-remove-icon" src="./assets/images/remove-icon.png" /></button>';
            const tabs = document.getElementById("tab_buttons");
            const plusButton = tabs.lastChild;
            tabs.insertBefore(newHTMLNode, plusButton);  
            dataToImport.drawflow
            console.log(dataToImport.drawflow);

            editor.clear();
            editor.import(lastDataToImport[lastDataToImport.length-1]);
            const remove = document.getElementsByClassName("tab-remove");
            const removeIcons = document.getElementsByClassName("tab-remove-icon");
            remove[remove.length - 1].addEventListener("click", tabRemove);            
            remove[remove.length - 1].setAttribute("module-name", tabName);
            removeIcons[remove.length - 1].setAttribute("module-name", tabName);
          }
        } else {
          Swal.fire({
            title: "Input the tag name",
            icon: 'warning'
          })
        }
      }
    })
  }

  return (
      // <div ref={drawflowRef} style={{ height: '500px', width: '70%',background:"red" }} />
      <Box>
        <Box className="wrapper">
          <Box className="col">
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="environment">
              <i className="fa-solid fa-seedling"></i><span> Environment</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="models">
              <i className="fa fa-tasks"></i><span> Models</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="agents">
              <i className="fa fa-building"></i><span> Agents</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="state">
              <i className="fas fa-business-time"></i><span> State </span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="reward">
              <i className="fas fa-medal"></i><span> Reward</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="broker_account">
              <i className="fa-regular fa-user"></i><span> Broker Account</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="action_space">
              <i className="fab fa-buysellads"></i><span> ActionSpace</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="features">
              <i className="fas fa-rocket"></i><span> Features</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="social_channels">
              <i className="fa-brands fa-telegram"></i><span> Social Channels</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="email">
              <i className="fa-duotone fa-at"></i><span> Send Email</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="template">
              <i className="fa-solid fa-code"></i><span> Template</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="event_logger">
              <i className="fas fa-file-alt"></i><span> Event logger</span>
            </Box>


          </Box>
          <Box className="col-right" style={{background:"black"}}>
            <Box className="menu" style={{color: "black"}}>
              <ul id='tab_buttons'>
                <li onClick={changeModule} module-name="Home" className="selected">Home</li>
                <li onClick={addModule}><i className='fa fa-plus'></i></li>
              </ul>
              {/* <button>plus</button> */}
            </Box>
            <Box id="drawflow" onDrop={drop} onDragOver={allowDrop}>
              <Box className="btn-export" onClick={handleExport}>Export</Box>
              <Box className="btn-clear" onClick={handleClearModule}>Clear</Box>
              <Box className='bar-play'>
                <button><i className='btn-controls-play fas fa-play'></i></button>
              </Box>
              <Box className='bar-controls'>
                <button onClick={undo}><i className='btn-controls-undo fas fa-undo'></i></button>
                <button onClick={redo}><i className='btn-controls fas fa-redo'></i></button>
                <button><i className='btn-controls fas fa-file-alt'></i></button>
                <button><i className='btn-controls fas fa-plane'></i></button>
                <button><i className='btn-controls fas fa-save'></i></button>
                <button><i className='btn-controls fas fa-share-alt'></i></button>
              </Box>
              <Box className="btn-lock">
                <button ref={lock} onClick={() => changeMode('lock')}><i className="fas fa-lock"></i></button>
                <button ref={unlock} onClick={() => changeMode('unlock')} style={{display:'none'}}><i className="fas fa-lock-open"></i></button>
              </Box>
              <Box className="bar-zoom">
                <button className='btn-zoom' onClick={handleZoomOut}><i className="fas fa-search-minus"></i></button>
                <button className='btn-zoom' onClick={handleZoomReset}><i className="fas fa-search"></i></button>
                <button className='btn-zoom-last' onClick={handleZoomIn}><i className="fas fa-search-plus"></i></button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
};

export default DrawflowWrapper;
