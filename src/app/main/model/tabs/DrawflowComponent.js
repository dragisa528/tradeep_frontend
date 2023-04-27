import React, { useRef, useEffect, useState } from 'react';
import { Box, Button, TextField, Tooltip, makeStyles, Modal, Card, CardActions, CardContent, Typography } from '@material-ui/core';
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
                      "html": "\n    <div>\n      <div class=\"title-box\" style=\"line-height: 25px;background-color: #2E3446; color: white;\"><p>👏 <b>Welcome!!</b></p>\n        <p><b>ChatGPT Engine!!</b>🤖</p></div>\n      <div class=\"box\">\n        <p><b>Tradeep.ai</b> is model training platform.</p>\n        <p>Build Agents, Train them on financial asset.</p>\n\n        <p>Enrich their features<br>\n           Work with Chatgpt<br>\n           to empower your trading.<br>\n           <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n     <div class=\"p-10\"><textarea rows=\"1\" class=\"w-full p-10 m-auto\" placeholder=\"To ChatGPT...\"></textarea><button class=\"py-5 px-10 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700\">BsSendFill</button><button style=\"float: right;\" class=\"py-5 px-10 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700\">BiCopy</button></div>    </div>\n    ",
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
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div>
            <div class="font-bold mb-2">
              <div class="title-box no-border" style="background-color: #2E3446; color: white;"><i class="fa-solid fa-seedling"></i> Env(APPL)</div>
              <div class="w-full" style="background-color: #2E3446">
                <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-10 m-5 py-5 text-center">SET DATA</button>
                <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-10 m-5 py-5 text-center">FEATURE SELECTION</button>
              </div>
            </div>
            <div class="p-6">
              <div class="box">
                <select>
                  <option value="crypto">Crypto</option>
                  <option value="stock_ETF">Stocks & ETF</option>
                  <option value="indices">Indices</option>
                  <option value="forex">Forex</option>
                  <option value="commodities">Commodities</option>
                </select>
                <select>
                  <option value="stocks">stocks.json</option>
                  <option value="commo">commo.json</option>
                  <option value="forex">forex.json</option>
                </select>
              </div>
            </div>
          </div>
          <div class="px-6 pt-4 pb-2" style="display: flex;">
            <span>Assets: </span>
            <div style="margin-left: 20px;"><i style="font-size: 20px;" class="fab fa-apple"></i></div>
            <div style="margin-left: 20px;"><i style="font-size: 20px;" class="fab fa-facebook"></i></div>
            <div style="margin-left: 25px;"><i style="font-size: 20px;" class="fab fa-bitcoin"></i></div>
          </div>
          <div class="w-full p-10">
            <span>Bar Interval:</span>
            <div class="inline-flex rounded-md shadow-sm w-full" role="group">
              <button type="button" class="w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 border border-white-900 rounded-l-lg">
                Daily
              </button>
              <button type="button" class="w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 border-t border-b border-white-900">
                4H
              </button>
              <button type="button" class="w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 border border-white-900">
                1H
              </button>
              <button type="button" class="w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 border-t border-b border-white-900">
                30M
              </button>
              <button type="button" class="w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 border border-white-900">
                10M
              </button>
              <button type="button" class="w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 border border-white-900 rounded-r-md">
                1M
              </button>
            </div>
          </div>
          <div class="w-full p-10">
            <span>Lockback:</span>
            <div class="inline-flex rounded-md shadow-sm w-full" role="group">
              <button type="button" class="w-1/4 py-5 border border-white-900 rounded-l-lg bg-blue-500 hover:bg-blue-700 text-white font-bold">
                Last Month
              </button>
              <button type="button" class="w-1/4 py-5 border-t border-r border-b border-white-900 bg-blue-500 hover:bg-blue-700 text-white font-bold">
                Last Year
              </button>
              <button type="button" class="w-1/4 py-5 border-t border-b border-white-900 bg-blue-500 hover:bg-blue-700 text-white font-bold">
                Year to Day
              </button>
              <button data-tooltip-target="#tooltip-click" data-tooltip-trigger="click" type="button" class="w-1/4 py-5 border border-white-900 rounded-r-md bg-blue-500 hover:bg-blue-700 text-white font-bold">
                Custom
              </button>
              <div id="tooltip-click" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                <div date-rangepicker class="flex items-center">
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                      </div>
                      <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                    </div>
                  <span class="mx-4 text-gray-500">to</span>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                  </div>
                </div>
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div class="w-full p-10">
            <span>Log Returns:</span>
            <div class="w-full p-10">

            </div>
          </div>

          <div class="w-full node-bottom">
              <div class="w-full p-10" style="display: flex;">
                  <div class="w-1/2">
                      <span>Learning Rate:</span>
                  </div>
                  <div class="w-1/2">
                      <input style="float: right;" type="number" value="0.01" step="0.01" />
                  </div>
              </div>
              <div class="w-full mt-10" style="display: flex;background-color: #F7F7F7;">
                  <div class="w-3/5 mt-5">
                      <div class="flex items-center">
                          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Show Advance Mode</label>
                      </div>
                  </div>
                  <div class="w-2/5">
                      <button class="text-black bg-white border hover:bg-white-800 rounded-lg text-sm px-10 m-5 py-5 text-center">CANCEL</button>
                      <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-10 m-5 py-5 text-center">NEXT</button>
                  </div>
              </div>
          </div>
        </div>
      `;
        editor.addNode('environment', 1,  1, pos_x, pos_y, 'environment', {}, environment );
        break;
      case 'state':
        var state = `
          <div>
            <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fas fa-business-time"></i> State</div>
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
              <button onclick="statePrompt()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 mt-10 rounded">Settings</button>
            </div>
          </div>
        `
        editor.addNode('state', 1, 1, pos_x, pos_y, 'state', {}, state );
        break;
      case 'reward':
        var reward = `
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div>
          <div class="font-bold mb-2">
            <div class="w-full">
              <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fas fa-medal"></i> REWARD SPACE</div>
            </div>
          </div>
          <div class="w-full">
              <div class="w-full p-10 reward-node">
                  <div class="w-full">
                      <span>Reward Type Selection:</span>
                      <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option value="sharp_reward_a">Sharp Reward A</option>
                          <option value="profitReward_b">ProfitReward B</option>
                          <option value="miniDrawdown">MiniDrawdown</option>
                      </select>
                  </div>
                  <div class="w-full p-10" style="display: flex;">
                      <div class="w-1/2" style="margin: auto">
                          <span>Riskfree Rate:</span>
                      </div>
                      <div class="w-1/2">
                          <input style="float: right;" type="number" value="0.01" step="0.01" />
                      </div>
                  </div>
                  <div class="w-full p-10" style="display: flex;">
                      <div class="w-1/2" style="margin: auto">
                          <span>Target Return:</span>
                      </div>
                      <div class="w-1/2">
                          <input style="float: right;" type="number" value="0.01" step="0.01" />
                      </div>
                  </div>
                  <div class="w-full p-10" style="display: flex;">
                      <div class="w-1/2" style="margin: auto">
                          <span>Add your Reward Function:</span>
                      </div>
                      <div style="float: right;display: flex;" class="w-1/2">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg m-5 text-center reward-function-btn">
                          <i class="fas fa-file-upload"></i>
                        </button>
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg m-5 text-center reward-function-btn">
                          <i class="fas fa-save"></i>
                        </button>
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg m-5 text-center reward-function-btn">
                          <i class="fas fa-file-upload"></i>
                        </button>
                      </div>
                  </div>
                  <div class="w-full p-10">
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your reward..."></textarea>
                  </div>
              </div>
      
              <div class="w-full node-bottom">
                  <div class="w-full p-20" style="display: flex;">
                      <div class="w-1/2">
                          <span>Learning Rate:</span>
                      </div>
                      <div class="w-1/2">
                          <input style="float: right;" type="number" value="0.01" step="0.01" />
                      </div>
                  </div>
                  <div class="w-full mt-10" style="display: flex;background-color: #F7F7F7;">
                      <div class="w-3/5 mt-5">
                          <div class="flex items-center">
                              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Show Advance Mode</label>
                          </div>
                      </div>
                      <div class="w-2/5">
                          <button class="text-black bg-white border hover:bg-white-800 rounded-lg text-sm px-10 m-5 py-5 text-center">CANCEL</button>
                          <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-10 m-5 py-5 text-center">NEXT</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
        `;
        editor.addNode('reward', 1, 1, pos_x, pos_y, 'reward', {}, reward );
        break;
      case 'broker_account':
        var broker_account = `
        <div>
          <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fa-regular fa-user"></i> Broker Account</div>
          <div class="box">
            <select>
              <option value="darwinex">Darwinex</option>
              <option value="binance">Binance</option>
              <option value="ohanda">Ohanda</option>
            </select>
          </div>
        </div>
        `;
        editor.addNode('broker_account', 1, 1, pos_x, pos_y, 'broker_account', {}, broker_account );
        break;
      case 'models':
        var models = `
          <div>
            <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fa fa-tasks"></i> Models</div>
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
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div>
              <div class="font-bold mb-2">
                <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fa fa-building"></i> Agent</div>
                <div class="w-full" style="background-color: #2E3446">
                  <ul class="flex flex-wrap -mb-px" id="agent-tab" data-tabs-target="#agent-tab-content" role="tablist">
                    <li role="presentation">
                      <button id="agent-risk-wallet" data-tabs-target="#risk-wallet" role="tab" aria-controls="risk-wallet" class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-10 m-5 py-5 text-center">RISK & WALLET</button>
                    </li>
                    <li role="presentation">
                      <button id="agent-agent-setup" data-tabs-target="#agent-setup" role="tab" aria-controls="agent-setup" class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-10 m-5 py-5 text-center">AGENT SETUP</button>
                    </li>
                    </ul>
                </div>
              </div>
              <div id="agent-tab-content">
                  <div class="hidden w-full p-10" style="display: flex" id="risk-wallet" role="tabpanel">
                      <div class="w-1/2">
                          <span style="float: left">Base Currency</span> <br/><br/>
                          <span style="float: left">Starting Amount</span><br/><br/>
                          <span style="float: left">Fees</span><br/><br/>
                          <span style="float: left">Slipping</span><br/>
                      </div>
                      <div class="w-1/2">
                          <select style="float: right; width: 100pxl">
                              <option value="ppo">PPO</option>
                              <option value="sac">SAC</option>
                              <option value="ddpg">DDPG</option>
                              <option value="multiAgent_ddpg">Multi-Agent DDPG</option>
                              <option value="a2c">A2C</option>
                              <option value="td3">TD3</option>
                          </select><br/><br/>
                          <p style="float: right">$10000</p><br/><br/>
                          <p class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700" style="float: right;">0.1%</p><br/><br/>
                          <p class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700" style="float: right;">0.15%</p>
                      </div>
                  </div>

                  <div class="w-full p-10" style="display: flex" id="agent-setup" role="tabpanel">
                      <div class="w-full">
                          <span>Type of Agents:</span>
                          <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option value="dqn">DQN</option>
                              <option value="sac">SAC</option>
                              <option value="ddpg">DDPG</option>
                              <option value="multiAgent_ddpg">Multi-Agent DDPG</option>
                              <option value="ppo">PPO</option>
                              <option value="a2c">A2C</option>
                              <option value="td3">TD3</option>
                          </select>
                          <span class="w-full">Window Size:</span>
                          <div class="w-full">
                            <input id="minmax-range" type="range" min="0" max="50" value="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                          </div>
                      </div>
                  </div>

                  <div class="w-full node-bottom">
                      <div class="w-full p-10" style="display: flex;">
                          <div class="w-1/2">
                              <span>Learning Rate:</span>
                          </div>
                          <div class="w-1/2">
                              <input style="float: right;" type="number" value="0.01" step="0.01" />
                          </div>
                      </div>
                      <div class="w-full mt-10" style="display: flex;background-color: #F7F7F7;">
                          <div class="w-3/5 mt-5">
                              <div class="flex items-center">
                                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Show Advance Mode</label>
                              </div>
                          </div>
                          <div class="w-2/5">
                              <button class="text-black bg-white border hover:bg-white-800 rounded-lg text-sm px-10 m-5 py-5 text-center">CANCEL</button>
                              <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-10 m-5 py-5 text-center">NEXT</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          `;
          editor.addNode('agents', 1, 1, pos_x, pos_y, 'agents', {}, agents );
          break;
      case 'event_logger':
        var event_logger = `
        <div>
          <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fas fa-file-alt"></i> Event Logger </div>
        </div>
        `;
        editor.addNode('event_logger', 1, 1, pos_x, pos_y, 'event_logger', {}, event_logger );
        break;
      case 'action_space':
        var action_space = `
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div>
          <div class="font-bold mb-2">
            <div class="w-full">
              <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fab fa-buysellads"></i> ACTION SPACE</div>
            </div>
          </div>
          <div class="w-full">
              <div class="w-full p-10 reward-node">
                  <div class="w-full">
                      <span>Type of Actions:</span>
                      <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="buy_sell_move2break">Buy,Sell-Move2Break</option>
                        <option value="buy_sell_hold">Buy, Sell, Hold</option>
                      </select>
                  </div>
                  <div class="w-full p-10" style="display: flex;">
                      <div class="w-1/2" style="margin: auto">
                          <span>Order Volumf:</span>
                      </div>
                      <div class="w-1/2">
                          <div style="float: right;">
                            <input class="form-input w-1/4 mr-2" type="number" value="0.01" step="0.01" />
                            <span class="text-gray-500">%</span>
                          </div>
                      </div>
                  </div>
                  <div class="w-full p-10" style="display: flex;">
                      <div class="w-1/2" style="margin: auto">
                          <span>Take Profit:</span>
                      </div>
                      <div class="w-1/2">
                        <div style="float: right;">
                          <input class="form-input w-1/4 mr-2" type="number" value="0.01" step="0.01" />
                          <span class="text-gray-500">%</span>
                        </div>
                      </div>
                  </div>
                  <div class="w-full p-10" style="display: flex;">
                      <div class="w-1/2" style="margin: auto">
                          <span>Stop Loss:</span>
                      </div>
                      <div class="w-1/2">
                        <div style="float: right;">
                          <input class="form-input w-1/4 mr-2" type="number" value="0.01" step="0.01" />
                          <span class="text-gray-500">%</span>
                        </div>
                      </div>
                  </div>
              </div>
      
              <div class="w-full node-bottom">
                  <div class="w-full mt-10" style="display: flex;background-color: #F7F7F7;">
                      <div class="w-3/5 mt-5">
                          <div class="flex items-center">
                              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Show Advance Mode</label>
                          </div>
                      </div>
                      <div class="w-2/5">
                          <button class="text-black bg-white border hover:bg-white-800 rounded-lg text-sm px-10 m-5 py-5 text-center">CANCEL</button>
                          <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-10 m-5 py-5 text-center">NEXT</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
        `;
        editor.addNode('action_space', 1, 1, pos_x, pos_y, 'action_space', {}, action_space );
        break;
      case 'features':
        var features = `
          <div>
            <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fas fa-rocket"></i> Features</div>
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
        editor.addNode('features', 1, 1, pos_x, pos_y, 'features', {}, features );
        break;
      case 'social_channels':
        var social_channels = `
          <div>
            <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fa-brands fa-telegram"></i> Social Channels</div>
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
        editor.addNode('social_channels', 1, 0, pos_x, pos_y, 'social_channels', {}, social_channels );
        break;
      case 'template':
          var template = `
            <div>
              <div class="title-box" style="background-color: #2E3446; color: white;"><i class="fa-solid fa-code"></i> Python Snippet</div>
              <div class="box">
                Py Snippet
                <textarea df-template></textarea>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 mt-10 rounded">Save</button>
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
      title: "Create New Agent/Model",
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

  const startTootipStyles = makeStyles((theme) => ({
    customTooltip: {
      backgroundColor: 'white',
      color: '#556EE6',
      fontSize: '25px',
    },
  }));

  const startClasses = startTootipStyles();

  const modalStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '30%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }));

  const modalClasses = modalStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function statePrompt() {
    var card = document.getElementById('statePrompt');
    card.style.display = 'block';
    console.log('success');
  }


  return (
      // <div ref={drawflowRef} style={{ height: '500px', width: '70%',background:"red" }} />
      <Box>
        <Box className="wrapper">
          <Box className="col">
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="environment">
              <i className="fa-solid fa-seedling"></i><span> Env(Select Asset)</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="models">
              <i className="fa fa-tasks"></i><span> Models</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="agents">
              <i className="fa fa-building"></i><span> Agent</span>
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
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="template">
              <i className="fa-solid fa-code"></i><span> Python Snippet</span>
            </Box>
            <Box className="drag-drawflow" draggable="true" onDragStart={drag} data-node="event_logger">
              <i className="fas fa-file-alt"></i><span> Event logger</span>
            </Box>


          </Box>
          <Box className="col-right" style={{background:"black"}}>
            <Box className="menu" style={{color: "black"}}>
              <ul id='tab_buttons'>
                <li onClick={changeModule} module-name="Home" className="selected">Home</li>
                <li onClick={addModule} style={{fontWeight: "bold"}}> <i className='fa fa-plus'></i></li>
              </ul>
              {/* <button>plus</button> */}
            </Box>
            <Box id="drawflow" onDrop={drop} onDragOver={allowDrop}>
              <Tooltip classes={{ tooltip: startClasses.customTooltip }} placement="right" title="Start Training">
                <Box className='bar-play' onClick={handleOpen}>
                  <button><i className='btn-controls-play fas fa-play'></i></button>
                </Box>
              </Tooltip>
              <Box className='bar-controls'>
                <Tooltip title="Undo">
                  <Button style={{minWidth: '50px'}} onClick={undo}><i className='fas fa-undo'></i></Button>
                </Tooltip>
                <Tooltip title="Redo">
                  <Button style={{minWidth: '50px'}} onClick={redo}><i className='fas fa-redo'></i></Button>
                </Tooltip>
                <Tooltip title="Notes">
                  <Button style={{minWidth: '50px'}}><i className='fas fa-file-alt'></i></Button>
                </Tooltip>
                <Tooltip title="Auto Aligne">
                  <Button style={{minWidth: '50px'}}><i className='fas fa-plane'></i></Button>
                </Tooltip>
                <Tooltip title="Save">
                  <Button style={{minWidth: '50px'}}><i className='fas fa-save'></i></Button>
                </Tooltip>
                <Tooltip title="Share">
                  <Button style={{minWidth: '50px'}}><i className='fas fa-share-alt'></i></Button>
                </Tooltip>
                <Tooltip title="Export">
                  <Button style={{minWidth: '50px'}} onClick={handleExport}><i className='fas fa-file-export'></i></Button>
                </Tooltip>
              </Box>
              <Box className="btn-lock" style={{height: '35px'}}>
                <Tooltip title="Lock">
                  <Button style={{minWidth: '50px', lineHeight: '0px'}} ref={lock} onClick={() => changeMode('lock')}><i className="fas fa-lock"></i></Button>
                </Tooltip>
                <Tooltip title="Unlock">
                  <Button ref={unlock} onClick={() => changeMode('unlock')} style={{display:'none', minWidth: "50px", lineHeight: '0px'}}><i className="fas fa-lock-open"></i></Button>
                </Tooltip>
              </Box>
              <Box className="bar-zoom">
                <Tooltip title="Zoom Out">
                  <Button style={{minWidth: '50px'}} className='btn-zoom' onClick={handleZoomOut}><i className="fas fa-search-minus"></i></Button>
                </Tooltip>
                <Tooltip title="Reset">
                  <Button style={{minWidth: '50px'}} className='btn-zoom' onClick={handleZoomReset}><i className="fas fa-search"></i></Button>
                </Tooltip>
                <Tooltip title="Zoom In">
                  <Button style={{minWidth: '50px'}} className='btn-zoom-last' onClick={handleZoomIn}><i className="fas fa-search-plus"></i></Button>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Box>
        <Modal open={open} onClose={handleClose}>
          <div className={modalClasses.paper}>
            <h2>Training Config</h2>
            <Box
              sx={{
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Device" id="trainingDevice" />
              <TextField fullWidth label="Steps" id="trainingSteps" />
              <TextField fullWidth label="Historical Data" id="historicalData" />
              <TextField fullWidth label="Window Size" id="windowSize" />
            </Box>
            <Button className='start-config-btn' variant="contained" color="primary" onClick={handleClose}>
              Submit
            </Button>
          </div>
        </Modal>
      </Box>
    );
};

export default DrawflowWrapper;
