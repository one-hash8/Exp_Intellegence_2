/*********************** 
 * Progr_122_Ceck *
 ***********************/


// store info about the experiment session:
let expName = 'progr_122_ceck';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'age': '1',
    'gender': ["F", "M"],
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.8039, 0.8039, 0.8039]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr_1RoutineBegin());
flowScheduler.add(instr_1RoutineEachFrame());
flowScheduler.add(instr_1RoutineEnd());
flowScheduler.add(instr_insightRoutineBegin());
flowScheduler.add(instr_insightRoutineEachFrame());
flowScheduler.add(instr_insightRoutineEnd());
flowScheduler.add(aha_instrRoutineBegin());
flowScheduler.add(aha_instrRoutineEachFrame());
flowScheduler.add(aha_instrRoutineEnd());
const instr_block_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instr_block_1LoopBegin(instr_block_1LoopScheduler));
flowScheduler.add(instr_block_1LoopScheduler);
flowScheduler.add(instr_block_1LoopEnd);














flowScheduler.add(block_2_startRoutineBegin());
flowScheduler.add(block_2_startRoutineEachFrame());
flowScheduler.add(block_2_startRoutineEnd());
const block_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_1LoopBegin(block_1LoopScheduler));
flowScheduler.add(block_1LoopScheduler);
flowScheduler.add(block_1LoopEnd);















flowScheduler.add(block_2_instrRoutineBegin());
flowScheduler.add(block_2_instrRoutineEachFrame());
flowScheduler.add(block_2_instrRoutineEnd());
const instr_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instr_2LoopBegin(instr_2LoopScheduler));
flowScheduler.add(instr_2LoopScheduler);
flowScheduler.add(instr_2LoopEnd);













flowScheduler.add(block_2_startRoutineBegin());
flowScheduler.add(block_2_startRoutineEachFrame());
flowScheduler.add(block_2_startRoutineEnd());
const pairsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pairsLoopBegin(pairsLoopScheduler));
flowScheduler.add(pairsLoopScheduler);
flowScheduler.add(pairsLoopEnd);


















flowScheduler.add(GoodbyRoutineBegin());
flowScheduler.add(GoodbyRoutineEachFrame());
flowScheduler.add(GoodbyRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'tables/block1_cond1.xlsx', 'path': 'tables/block1_cond1.xlsx'},
    {'name': 'conf_pics/004.png', 'path': 'conf_pics/004.png'},
    {'name': 'raven_1/raven_1.png', 'path': 'raven_1/raven_1.png'},
    {'name': 'pics/Anger/anger_4.png', 'path': 'pics/Anger/anger_4.png'},
    {'name': 'conf_pics/013.png', 'path': 'conf_pics/013.png'},
    {'name': 'raven_1/raven_2.png', 'path': 'raven_1/raven_2.png'},
    {'name': 'pics_1/Disgust/disgust_1.png', 'path': 'pics_1/Disgust/disgust_1.png'},
    {'name': 'conf_pics/020.png', 'path': 'conf_pics/020.png'},
    {'name': 'raven_1/raven_3.png', 'path': 'raven_1/raven_3.png'},
    {'name': 'pics/Happiness/Happy_2.png', 'path': 'pics/Happiness/Happy_2.png'},
    {'name': 'conf_pics/8.png', 'path': 'conf_pics/8.png'},
    {'name': 'raven_1/raven_4.png', 'path': 'raven_1/raven_4.png'},
    {'name': 'pics/Neut/neutr_4.png', 'path': 'pics/Neut/neutr_4.png'},
    {'name': 'conf_pics/044.png', 'path': 'conf_pics/044.png'},
    {'name': 'raven_1/raven_5.png', 'path': 'raven_1/raven_5.png'},
    {'name': 'conf_pics/118.png', 'path': 'conf_pics/118.png'},
    {'name': 'raven_1/raven_6.png', 'path': 'raven_1/raven_6.png'},
    {'name': 'pics/Surprise!/surprise_8.png', 'path': 'pics/Surprise!/surprise_8.png'},
    {'name': 'conf_pics/058.png', 'path': 'conf_pics/058.png'},
    {'name': 'raven_1/raven_7.png', 'path': 'raven_1/raven_7.png'},
    {'name': 'pics/Neut/neutr_1.png', 'path': 'pics/Neut/neutr_1.png'},
    {'name': 'conf_pics/079.png', 'path': 'conf_pics/079.png'},
    {'name': 'raven_1/raven_8.png', 'path': 'raven_1/raven_8.png'},
    {'name': 'conf_pics/097.png', 'path': 'conf_pics/097.png'},
    {'name': 'raven_1/raven_9.png', 'path': 'raven_1/raven_9.png'},
    {'name': 'pics/Happiness/happy_8.png', 'path': 'pics/Happiness/happy_8.png'},
    {'name': 'conf_pics/103.png', 'path': 'conf_pics/103.png'},
    {'name': 'raven_1/raven_10.png', 'path': 'raven_1/raven_10.png'},
    {'name': 'pics/Sadness/sadness_3.png', 'path': 'pics/Sadness/sadness_3.png'},
    {'name': 'tables/block2_cond1.xlsx', 'path': 'tables/block2_cond1.xlsx'},
    {'name': 'raven_2/raven_11.png', 'path': 'raven_2/raven_11.png'},
    {'name': 'raven_2/raven_12.png', 'path': 'raven_2/raven_12.png'},
    {'name': 'raven_2/raven_13.png', 'path': 'raven_2/raven_13.png'},
    {'name': 'raven_2/raven_14.png', 'path': 'raven_2/raven_14.png'},
    {'name': 'raven_2/raven_15.png', 'path': 'raven_2/raven_15.png'},
    {'name': 'raven_2/raven_16.png', 'path': 'raven_2/raven_16.png'},
    {'name': 'raven_2/raven_17.png', 'path': 'raven_2/raven_17.png'},
    {'name': 'raven_2/raven_18.png', 'path': 'raven_2/raven_18.png'},
    {'name': 'raven_2/raven_19.png', 'path': 'raven_2/raven_19.png'},
    {'name': 'raven_2/raven_20.png', 'path': 'raven_2/raven_20.png'},
    {'name': 'raven_2\raven_21.png', 'path': 'raven_2/raven_21.png'},
    {'name': 'raven_2\raven_22.png', 'path': 'raven_2/raven_22.png'},
    {'name': 'raven_2\raven_23.png', 'path': 'raven_2/raven_23.png'},
    {'name': 'raven_2\raven_24.png', 'path': 'raven_2/raven_24.png'},
    {'name': 'raven_2\raven_25.png', 'path': 'raven_2/raven_25.png'},
    {'name': 'raven_2\raven_26.png', 'path': 'raven_2/raven_26.png'},
    {'name': 'raven_2\raven_27.png', 'path': 'raven_2/raven_27.png'},
    {'name': 'raven_2\raven_28.png', 'path': 'raven_2/raven_28.png'},
    {'name': 'raven_2\raven_29.png', 'path': 'raven_2/raven_29.png'},
    {'name': 'raven_2\raven_30.png', 'path': 'raven_2/raven_30.png'},
    {'name': 'tables/faces2_cond1.xlsx', 'path': 'tables/faces2_cond1.xlsx'},
    {'name': 'pics/Surprise!/surprise_1.png', 'path': 'pics/Surprise!/surprise_1.png'},
    {'name': 'pics/Anger/anger_1.png', 'path': 'pics/Anger/anger_1.png'},
    {'name': 'pics/Happiness/Happy_test.png', 'path': 'pics/Happiness/Happy_test.png'},
    {'name': 'pics/Surprise!/surprise_2.png', 'path': 'pics/Surprise!/surprise_2.png'},
    {'name': 'pics/Sadness/sadness_3.png', 'path': 'pics/Sadness/sadness_3.png'},
    {'name': 'pics/Surprise!/surprise_3.png', 'path': 'pics/Surprise!/surprise_3.png'},
    {'name': 'pics/Happiness/Happy_3.png', 'path': 'pics/Happiness/Happy_3.png'},
    {'name': 'pics/Anger/anger_4.png', 'path': 'pics/Anger/anger_4.png'},
    {'name': 'pics/Disgust/disgust_4.png', 'path': 'pics/Disgust/disgust_4.png'},
    {'name': 'pics/Happiness/Happy_4.png', 'path': 'pics/Happiness/Happy_4.png'},
    {'name': 'pics/Disgust/disgust_5.png', 'path': 'pics/Disgust/disgust_5.png'},
    {'name': 'pics/Happiness/Happy_5.png', 'path': 'pics/Happiness/Happy_5.png'},
    {'name': 'pics/Happiness/Happy_6.png', 'path': 'pics/Happiness/Happy_6.png'},
    {'name': 'pics/Disgust/disgust_6.png', 'path': 'pics/Disgust/disgust_6.png'},
    {'name': 'pics/Surprise!/surprise_6.png', 'path': 'pics/Surprise!/surprise_6.png'},
    {'name': 'pics/Surprise!/surprise_7.png', 'path': 'pics/Surprise!/surprise_7.png'},
    {'name': 'pics/Happiness/Happy_7.png', 'path': 'pics/Happiness/Happy_7.png'},
    {'name': 'pics/Sadness/sadness_7.png', 'path': 'pics/Sadness/sadness_7.png'},
    {'name': 'pics/Anger/anger_8.png', 'path': 'pics/Anger/anger_8.png'},
    {'name': 'pics/Happiness/Happy_8.png', 'path': 'pics/Happiness/Happy_8.png'},
    {'name': 'pics/Sadness/sadness_8.png', 'path': 'pics/Sadness/sadness_8.png'},
    {'name': 'pics/Neut/neutr_9.png', 'path': 'pics/Neut/neutr_9.png'},
    {'name': 'pics/Anger/anger_9.png', 'path': 'pics/Anger/anger_9.png'},
    {'name': 'pics/Anger/anger_10.png', 'path': 'pics/Anger/anger_10.png'},
    {'name': 'pics/Neut/neutr_10.png', 'path': 'pics/Neut/neutr_10.png'},
    {'name': 'pics/Neut/neutr_7.png', 'path': 'pics/Neut/neutr_7.png'},
    {'name': 'pics/Neut/neutr_6.png', 'path': 'pics/Neut/neutr_6.png'},
    {'name': 'pics/Sadness/sadness_5.png', 'path': 'pics/Sadness/sadness_5.png'},
    {'name': 'pics/Sadness/sadness_2.png', 'path': 'pics/Sadness/sadness_2.png'},
    {'name': 'pics/Happiness/happy_9.png', 'path': 'pics/Happiness/happy_9.png'},
    {'name': 'pics\Disgust\disgust_10.png', 'path': 'pics/Disgust/disgust_10.png'},
    {'name': 'pics\Disgust\disgust_9.png', 'path': 'pics/Disgust/disgust_9.png'},
    {'name': 'tables/idioms1_cond1.xlsx', 'path': 'tables/idioms1_cond1.xlsx'},
    {'name': 'idioms/idioms_1/БЧ_О.png', 'path': 'idioms/idioms_1/БЧ_О.png'},
    {'name': 'idioms/idioms_1/ГНРЯ_Б.png', 'path': 'idioms/idioms_1/ГНРЯ_Б.png'},
    {'name': 'idioms/idioms_1/МНБК_Б.png', 'path': 'idioms/idioms_1/МНБК_Б.png'},
    {'name': 'idioms/idioms_1/МНГ_Б.png', 'path': 'idioms/idioms_1/МНГ_Б.png'},
    {'name': 'idioms/idioms_1/МПС_О.png', 'path': 'idioms/idioms_1/МПС_О.png'},
    {'name': 'idioms/idioms_1/НС_О.png', 'path': 'idioms/idioms_1/НС_О.png'},
    {'name': 'idioms/idioms_1/ПСДВ_О.png', 'path': 'idioms/idioms_1/ПСДВ_О.png'},
    {'name': 'idioms/idioms_1/СМНМ_Б.png', 'path': 'idioms/idioms_1/СМНМ_Б.png'},
    {'name': 'idioms/idioms_1/ЛДГ_Б.png', 'path': 'idioms/idioms_1/ЛДГ_Б.png'},
    {'name': 'idioms/idioms_1/УНП_О.png', 'path': 'idioms/idioms_1/УНП_О.png'},
    {'name': 'idioms/idioms_1/БДГВ_Б.png', 'path': 'idioms/idioms_1/БДГВ_Б.png'},
    {'name': 'idioms/idioms_1/ГВК_О.png', 'path': 'idioms/idioms_1/ГВК_О.png'},
    {'name': 'idioms/idioms_1/СО_Б.png', 'path': 'idioms/idioms_1/СО_Б.png'},
    {'name': 'idioms/idioms_1/ЗП_О.png', 'path': 'idioms/idioms_1/ЗП_О.png'},
    {'name': 'idioms/idioms_1/НКС_О.png', 'path': 'idioms/idioms_1/НКС_О.png'},
    {'name': 'idioms/idioms_1/ВСНБУ_О.png', 'path': 'idioms/idioms_1/ВСНБУ_О.png'},
    {'name': 'idioms/idioms_1/ПВЗ_Б.png', 'path': 'idioms/idioms_1/ПВЗ_Б.png'},
    {'name': 'idioms/idioms_1/ССС_Б.png', 'path': 'idioms/idioms_1/ССС_Б.png'},
    {'name': 'idioms/idioms_1/СНП_Б.png', 'path': 'idioms/idioms_1/СНП_Б.png'},
    {'name': 'idioms/idioms_1/СС_О.png', 'path': 'idioms/idioms_1/СС_О.png'},
    {'name': 'raven_1/raven_test_1.png', 'path': 'raven_1/raven_test_1.png'},
    {'name': 'pics/Anger/angry_test.png', 'path': 'pics/Anger/angry_test.png'},
    {'name': 'pics_1/Anger/angry_test.png', 'path': 'pics_1/Anger/angry_test.png'},
    {'name': 'conf_pics/094.png', 'path': 'conf_pics/094.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'raven_2/raven_test_2.png', 'path': 'raven_2/raven_test_2.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = ',';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "instr_1"
  instr_1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Приветствуем! В рамках данного эксперимента мы исследуем взаимосвязь различных типов интеллекта. Вам будет предложено решить 2 блока заданий. В каждом - 3 типа заданий: матрицы Равена, определение эмоций и ребусы. \n\nВремя на решение каждого типа заданий будет ограничено. На одни задачи будут предъявляться варианты ответов, на другие - нет.\n\nЧтобы перейти к следующему слайду, нажмите "Enter".\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_insight"
  instr_insightClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'В рамках некоторых заданий Вам нужно будет отметить, испытали ли Вы инсайт при знакомстве с правильным ответом, а также оценить интенсивность ага-переживания.\n\nЕсли при знакомстве с правильным ответом Вы ощутили нечто вроде озарения ("Ага!", "Вот оно что!", "Эврика" и т.д.), отметьте, что испытали инсайт.\n\nЧтобы перейти далее, нажмите "Enter".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "aha_instr"
  aha_instrClock = new util.Clock();
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: 'Мы также просим оценить интенсивность ага-переживания по шкале от 0 до 5 (где 0 - отсутствие Ага, а 5 - очень сильное Ага).\n\nБолее подробное описание инсайта и ага-переживания Вы можете прочесть в согласии или спросить у экспериментатора.\n\nЧтобы перейти к инструкции к первому блоку, нажмите "Enter".\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_32 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_raven_1"
  instr_raven_1Clock = new util.Clock();
  text_instr_raven_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr_raven_1',
    text: 'В первом задании Вам будет предложена матрица с изображениями, в которой отсутствует один из составляющих её фрагментов. Ваша задача — найти закономерность, которая связывает изображения в матрице, и определить, какой из 6 предложенных вариантов (в нижнем ряду) подходит для заполнения пустого места.\n\nПосле ответа отметьте, испытали ли Вы инсайт при решении и оцените интенсивность Ага-переживания.\n\nЧтобы перейти к заданию, нажмите "Enter".\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "raven_1_testt"
  raven_1_testtClock = new util.Clock();
  key_raven_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  img_raven_1_test = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_raven_1_test', units : undefined, 
    image : 'raven_1/raven_test_1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.8, 0.85],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Нажмите на верхней клавиатуре на цифру с правильным ответом.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "insight_fake_solve"
  insight_fake_solveClock = new util.Clock();
  text_insight_fake_solve = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_insight_fake_solve',
    text: 'Испытали ли Вы инсайт при решении?\nДа Нет\n1 2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_insight_fake_solve = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "aha_fake"
  aha_fakeClock = new util.Clock();
  aha_fake_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_fake_2',
    text: 'Отметьте интенсивность Ага-переживания по шкале от 0 до 5.\nНажмите соответствующую клавишу на клавиатуре.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  aha_fake_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "faces1_instr"
  faces1_instrClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'В следующем задании будет предъявлена фотография. Вам нужно будет отметить с помощью цифры на клавиатуре, какую эмоцию испытывает человек на ней.\n\nЧтобы перейти к заданию, нажмите "Enter".\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "faces1_test_face"
  faces1_test_faceClock = new util.Clock();
  img_faces_1_test = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_faces_1_test', units : undefined, 
    image : 'pics/Anger/angry_test.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.7, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "faces1_var_test"
  faces1_var_testClock = new util.Clock();
  text_100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100',
    text: '1) Злость\n',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.35), (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_200 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_200',
    text: '2) Отвращение\n',
    font: 'Arial',
    units: undefined, 
    pos: [0.35, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_300 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_300',
    text: '3) Нейтральное',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.35), (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  text_400 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_400',
    text: '4) Радость\n',
    font: 'Arial',
    units: 'height', 
    pos: [0.35, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_33 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  img_000 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_000', units : undefined, 
    image : 'pics_1/Anger/angry_test.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "faces_var_answer_test"
  faces_var_answer_testClock = new util.Clock();
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'Правильный ответ:\n\n1) Злость',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'pics/Anger/angry_test.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.1)], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "idiom_instr_1"
  idiom_instr_1Clock = new util.Clock();
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: 'Далее Вам будут показаны ребусы. Ответом на ребус является устойчивое выражение русского языка. Вам будет предъявлен ребус и через небольшой промежуток времени – вариант ответа. Ваша задача – определить, является ли данное выражение правильным ответом к ребусу.\n После этого нужно отметить, испытали ли Вы инсайт при знакомстве с ответом и оценить интенсивность Ага-переживания.\n\nЧтобы перейти к заданию, нажмите "Enter".\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_34 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "idiom1_test"
  idiom1_testClock = new util.Clock();
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'conf_pics/094.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.161, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_35 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "true_or_not_instr"
  true_or_not_instrClock = new util.Clock();
  image_45 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_45', units : undefined, 
    image : 'conf_pics/094.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.58, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: 'Ломать комедию',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.0)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'Выражение является ответом на ребус?\nНет Да\n1  2',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_25 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "insight_fake"
  insight_fakeClock = new util.Clock();
  insight_fake_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'insight_fake_text',
    text: 'Испытали ли Вы инсайт при знакомстве с правильным ответом/самостоятельном решении?\nДа Нет\n1 2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  insight_fake_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_2_start"
  block_2_startClock = new util.Clock();
  // Run 'Begin Experiment' code from code_6
  
          // add-on: list(s: string): string[]
          function list(s) {
              // if s is a string, we return a list of its characters
              if (typeof s === 'string')
                  return s.split('');
              else
                  // otherwise we return s:
                  return s;
          }
  
          import {data} from 'psychopy';
  import * as random from 'random';
  faces_file = "tables/faces2_cond1.xlsx";
  idioms_file = "tables/idioms2_cond1.xlsx";
  faces_rows = data.importConditions(faces_file);
  idioms_rows = data.importConditions(idioms_file);
  n_faces = faces_rows.length;
  n_idioms = idioms_rows.length;
  face_order = list(util.range(n_faces));
  Math.random.shuffle(face_order);
  idioms_order = list(util.range(n_idioms));
  Math.random.shuffle(idioms_order);
  n_pairs = Math.min(n_faces, n_idioms);
  face_order = function () {
      var _pj_a = [], _pj_b = face_order.slice(0, n_pairs);
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var i = _pj_b[_pj_c];
          _pj_a.push(Number.parseInt(i));
      }
      return _pj_a;
  }
  .call(this);
  idioms_order = function () {
      var _pj_a = [], _pj_b = idioms_order.slice(0, n_pairs);
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var i = _pj_b[_pj_c];
          _pj_a.push(Number.parseInt(i));
      }
      return _pj_a;
  }
  .call(this);
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Если у Вас есть вопросы по выполнению заданий, можете задать их экспериментатору.\n\nЧтобы перейти к выполнению блока, нажмите "Enter".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixate"
  fixateClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "raven"
  ravenClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.8, 0.85],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_26 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "aha_fake_solve"
  aha_fake_solveClock = new util.Clock();
  text_aha_fake_solve = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_aha_fake_solve',
    text: 'Отметьте интенсивность Ага-переживания по шкале от 0 до 5.\nНажмите соответствующую клавишу на клавиатуре.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_aha_fake_solve = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "faces_1_face"
  faces_1_faceClock = new util.Clock();
  img_faces_1_face = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_faces_1_face', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.7, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "faces_1_var"
  faces_1_varClock = new util.Clock();
  text_faces1_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_faces1_1',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.35), (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_faces1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_faces1_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.35, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_faces1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_faces1_3',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.35), (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  text_faces1_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_faces1_4',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0.35, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  img_faces1_var = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_faces1_var', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  key_resp_24 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "faces_1_answer"
  faces_1_answerClock = new util.Clock();
  img_faces_1_answer = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_faces_1_answer', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.1)], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_faces_1_answer = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_faces_1_answer',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "idioms1_image"
  idioms1_imageClock = new util.Clock();
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.161, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "true_or_not"
  true_or_notClock = new util.Clock();
  image_47 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_47', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.58, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'Выражение является ответом на ребус?\nДа Нет\n1  2',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Можете передохнуть.\n\nЧтобы перейти к следующему раунду, нажмите "Enter".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_2_instr"
  block_2_instrClock = new util.Clock();
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: 'Вы прошли первый блок.\nЧтобы перейти к инструкциям ко второму, нажмите "Enter".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_28 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_2_raven"
  instr_2_ravenClock = new util.Clock();
  text_instr2_raven = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr2_raven',
    text: 'В первом задании Вам будет предложена матрица изображений, в которой отсутствует один из составляющих её элементов. Отмечать правильный ответ НЕ НУЖНО, Ваша задача – оценить, насколько трудным является данное задание по стобалльной шкале (где 1 - совсем простая, 100 – максимально трудная). \n\nС помощью мыши нажмите на слайдер. Чтобы подтвердить ответ, нажмите Enter.\n\nЧтобы перейти к заданию, нажмите "Enter".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "raven_2_instr"
  raven_2_instrClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'raven_2/raven_test_2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.8, 0.85],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "raven_grade"
  raven_gradeClock = new util.Clock();
  key_diff = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_raven_grade = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_raven_grade',
    text: 'Сложность задачи',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  slider_raven = new visual.Slider({
    win: psychoJS.window, name: 'slider_raven',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [0, 100],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  mouse_raven = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_raven.mouseClock = new util.Clock();
  text_100_raven = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100_raven',
    text: '100',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  text_0_raven = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_0_raven',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "idiom_instr"
  idiom_instrClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'В следующем задании Вам будут предъявлены ребусы, придуманные участниками нашего предыдущего исследования с правильным ответом на ребус. Вам необходимо отметить, испытали ли Вы инсайт при знакомстве с ответом и оценить интенсивность Ага-переживания.\n\nПосле этого Вам нужно оценить оригинальность предъявленного ребуса по шкале от 1 до 100 (где 1 – идея ребуса не интересна и не оригинальна, 100 – максимально оригинальная и креативная идея).\n\nЧтобы перейти к заданию, нажмите "Enter".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "idiom_test"
  idiom_testClock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'conf_pics/094.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.6, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_31 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "idioms_answer"
  idioms_answerClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Ломать комедию.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  image_44 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_44', units : undefined, 
    image : 'conf_pics/094.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.424, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: 'Испытали ли Вы инсайт при решении или знакомстве с правильным ответом?\nДа Нет\n1 2',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_36 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "grade_idioms_test"
  grade_idioms_testClock = new util.Clock();
  key_resp_30 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  slider_orig_test = new visual.Slider({
    win: psychoJS.window, name: 'slider_orig_test',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 100],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  text_orig_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_orig_test',
    text: 'Оригинальность ребуса',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  text_0_orig_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_0_orig_test',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  text_100_orig_test_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100_orig_test_2',
    text: '100',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "raven_1"
  raven_1Clock = new util.Clock();
  image_raven_1_test = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_raven_1_test', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.8, 0.85],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "idioms_task"
  idioms_taskClock = new util.Clock();
  idioma = new visual.ImageStim({
    win : psychoJS.window,
    name : 'idioma', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.77, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_idioma_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "idioms_right_answer"
  idioms_right_answerClock = new util.Clock();
  text_right_idiom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_right_idiom',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  image_right_idiom = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_right_idiom', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.512, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_insight_idioms_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_insight_idioms_2',
    text: 'Испытали ли Вы инсайт при знакомстве с правильным ответом?\nДа Нет\n1 2',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_37 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "aha"
  ahaClock = new util.Clock();
  text_aha_idioms = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_aha_idioms',
    text: 'Отметьте интенсивность Ага-переживания по шкале от 0 до 5.\nНажмите соответствующую клавишу на клавиатуре.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_aha_idioms = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "grade_test"
  grade_testClock = new util.Clock();
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  slider_originality_test = new visual.Slider({
    win: psychoJS.window, name: 'slider_originality_test',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 100],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  text_originality_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_originality_test',
    text: 'Оригинальность ребуса',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  text_0_originality_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_0_originality_test',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  text_100_originality_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100_originality_test',
    text: '100',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "break_1"
  break_1Clock = new util.Clock();
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: 'Можете передохнуть.\n\nЧтобы перейти к следующему раунду, нажмите "Enter".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  progress_lbl = new visual.TextStim({
    win: psychoJS.window,
    name: 'progress_lbl',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Goodby"
  GoodbyClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Спасибо за участие в нашем эксперименте!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function instr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instr_1Clock.reset();
    routineTimer.reset();
    instr_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    instr_1MaxDuration = null
    // keep track of which components have finished
    instr_1Components = [];
    instr_1Components.push(text);
    instr_1Components.push(key_resp);
    
    instr_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function instr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_1' ---
    // get current time
    t = instr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.1 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_1' ---
    instr_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp.stop();
    // the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instr_insightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_insight' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instr_insightClock.reset();
    routineTimer.reset();
    instr_insightMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    instr_insightMaxDuration = null
    // keep track of which components have finished
    instr_insightComponents = [];
    instr_insightComponents.push(text_3);
    instr_insightComponents.push(key_resp_3);
    
    instr_insightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function instr_insightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_insight' ---
    // get current time
    t = instr_insightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.1 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_insightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_insightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_insight' ---
    instr_insightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_3.stop();
    // the Routine "instr_insight" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function aha_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'aha_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    aha_instrClock.reset();
    routineTimer.reset();
    aha_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_32.keys = undefined;
    key_resp_32.rt = undefined;
    _key_resp_32_allKeys = [];
    psychoJS.experiment.addData('aha_instr.started', globalClock.getTime());
    aha_instrMaxDuration = null
    // keep track of which components have finished
    aha_instrComponents = [];
    aha_instrComponents.push(text_27);
    aha_instrComponents.push(key_resp_32);
    
    aha_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function aha_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'aha_instr' ---
    // get current time
    t = aha_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }
    
    
    // *key_resp_32* updates
    if (t >= 0.0 && key_resp_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_32.tStart = t;  // (not accounting for frame time here)
      key_resp_32.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_32.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_32.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_32.clearEvents(); });
    }
    
    if (key_resp_32.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_32.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_32_allKeys = _key_resp_32_allKeys.concat(theseKeys);
      if (_key_resp_32_allKeys.length > 0) {
        key_resp_32.keys = _key_resp_32_allKeys[_key_resp_32_allKeys.length - 1].name;  // just the last key pressed
        key_resp_32.rt = _key_resp_32_allKeys[_key_resp_32_allKeys.length - 1].rt;
        key_resp_32.duration = _key_resp_32_allKeys[_key_resp_32_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    aha_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function aha_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'aha_instr' ---
    aha_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('aha_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_32.corr, level);
    }
    psychoJS.experiment.addData('key_resp_32.keys', key_resp_32.keys);
    if (typeof key_resp_32.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_32.rt', key_resp_32.rt);
        psychoJS.experiment.addData('key_resp_32.duration', key_resp_32.duration);
        routineTimer.reset();
        }
    
    key_resp_32.stop();
    // the Routine "aha_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instr_block_1LoopBegin(instr_block_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instr_block_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 0, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instr_block_1'
    });
    psychoJS.experiment.addLoop(instr_block_1); // add the loop to the experiment
    currentLoop = instr_block_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instr_block_1.forEach(function() {
      snapshot = instr_block_1.getSnapshot();
    
      instr_block_1LoopScheduler.add(importConditions(snapshot));
      instr_block_1LoopScheduler.add(instr_raven_1RoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(instr_raven_1RoutineEachFrame());
      instr_block_1LoopScheduler.add(instr_raven_1RoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(raven_1_testtRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(raven_1_testtRoutineEachFrame());
      instr_block_1LoopScheduler.add(raven_1_testtRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(insight_fake_solveRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(insight_fake_solveRoutineEachFrame());
      instr_block_1LoopScheduler.add(insight_fake_solveRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(aha_fakeRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(aha_fakeRoutineEachFrame());
      instr_block_1LoopScheduler.add(aha_fakeRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(faces1_instrRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(faces1_instrRoutineEachFrame());
      instr_block_1LoopScheduler.add(faces1_instrRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(faces1_test_faceRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(faces1_test_faceRoutineEachFrame());
      instr_block_1LoopScheduler.add(faces1_test_faceRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(faces1_var_testRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(faces1_var_testRoutineEachFrame());
      instr_block_1LoopScheduler.add(faces1_var_testRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(faces_var_answer_testRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(faces_var_answer_testRoutineEachFrame());
      instr_block_1LoopScheduler.add(faces_var_answer_testRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(idiom_instr_1RoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(idiom_instr_1RoutineEachFrame());
      instr_block_1LoopScheduler.add(idiom_instr_1RoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(idiom1_testRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(idiom1_testRoutineEachFrame());
      instr_block_1LoopScheduler.add(idiom1_testRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(true_or_not_instrRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(true_or_not_instrRoutineEachFrame());
      instr_block_1LoopScheduler.add(true_or_not_instrRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(insight_fakeRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(insight_fakeRoutineEachFrame());
      instr_block_1LoopScheduler.add(insight_fakeRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(aha_fakeRoutineBegin(snapshot));
      instr_block_1LoopScheduler.add(aha_fakeRoutineEachFrame());
      instr_block_1LoopScheduler.add(aha_fakeRoutineEnd(snapshot));
      instr_block_1LoopScheduler.add(instr_block_1LoopEndIteration(instr_block_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function instr_block_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instr_block_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function instr_block_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function block_1LoopBegin(block_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 0, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tables/block1_cond1.xlsx',
      seed: undefined, name: 'block_1'
    });
    psychoJS.experiment.addLoop(block_1); // add the loop to the experiment
    currentLoop = block_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block_1.forEach(function() {
      snapshot = block_1.getSnapshot();
    
      block_1LoopScheduler.add(importConditions(snapshot));
      block_1LoopScheduler.add(fixateRoutineBegin(snapshot));
      block_1LoopScheduler.add(fixateRoutineEachFrame());
      block_1LoopScheduler.add(fixateRoutineEnd(snapshot));
      block_1LoopScheduler.add(ravenRoutineBegin(snapshot));
      block_1LoopScheduler.add(ravenRoutineEachFrame());
      block_1LoopScheduler.add(ravenRoutineEnd(snapshot));
      block_1LoopScheduler.add(insight_fake_solveRoutineBegin(snapshot));
      block_1LoopScheduler.add(insight_fake_solveRoutineEachFrame());
      block_1LoopScheduler.add(insight_fake_solveRoutineEnd(snapshot));
      block_1LoopScheduler.add(aha_fake_solveRoutineBegin(snapshot));
      block_1LoopScheduler.add(aha_fake_solveRoutineEachFrame());
      block_1LoopScheduler.add(aha_fake_solveRoutineEnd(snapshot));
      block_1LoopScheduler.add(fixateRoutineBegin(snapshot));
      block_1LoopScheduler.add(fixateRoutineEachFrame());
      block_1LoopScheduler.add(fixateRoutineEnd(snapshot));
      block_1LoopScheduler.add(faces_1_faceRoutineBegin(snapshot));
      block_1LoopScheduler.add(faces_1_faceRoutineEachFrame());
      block_1LoopScheduler.add(faces_1_faceRoutineEnd(snapshot));
      block_1LoopScheduler.add(faces_1_varRoutineBegin(snapshot));
      block_1LoopScheduler.add(faces_1_varRoutineEachFrame());
      block_1LoopScheduler.add(faces_1_varRoutineEnd(snapshot));
      block_1LoopScheduler.add(faces_1_answerRoutineBegin(snapshot));
      block_1LoopScheduler.add(faces_1_answerRoutineEachFrame());
      block_1LoopScheduler.add(faces_1_answerRoutineEnd(snapshot));
      block_1LoopScheduler.add(fixateRoutineBegin(snapshot));
      block_1LoopScheduler.add(fixateRoutineEachFrame());
      block_1LoopScheduler.add(fixateRoutineEnd(snapshot));
      block_1LoopScheduler.add(idioms1_imageRoutineBegin(snapshot));
      block_1LoopScheduler.add(idioms1_imageRoutineEachFrame());
      block_1LoopScheduler.add(idioms1_imageRoutineEnd(snapshot));
      block_1LoopScheduler.add(true_or_notRoutineBegin(snapshot));
      block_1LoopScheduler.add(true_or_notRoutineEachFrame());
      block_1LoopScheduler.add(true_or_notRoutineEnd(snapshot));
      block_1LoopScheduler.add(insight_fakeRoutineBegin(snapshot));
      block_1LoopScheduler.add(insight_fakeRoutineEachFrame());
      block_1LoopScheduler.add(insight_fakeRoutineEnd(snapshot));
      block_1LoopScheduler.add(aha_fakeRoutineBegin(snapshot));
      block_1LoopScheduler.add(aha_fakeRoutineEachFrame());
      block_1LoopScheduler.add(aha_fakeRoutineEnd(snapshot));
      block_1LoopScheduler.add(break_2RoutineBegin(snapshot));
      block_1LoopScheduler.add(break_2RoutineEachFrame());
      block_1LoopScheduler.add(break_2RoutineEnd(snapshot));
      block_1LoopScheduler.add(block_1LoopEndIteration(block_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function block_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function block_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function instr_2LoopBegin(instr_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instr_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 0, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instr_2'
    });
    psychoJS.experiment.addLoop(instr_2); // add the loop to the experiment
    currentLoop = instr_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instr_2.forEach(function() {
      snapshot = instr_2.getSnapshot();
    
      instr_2LoopScheduler.add(importConditions(snapshot));
      instr_2LoopScheduler.add(instr_2_ravenRoutineBegin(snapshot));
      instr_2LoopScheduler.add(instr_2_ravenRoutineEachFrame());
      instr_2LoopScheduler.add(instr_2_ravenRoutineEnd(snapshot));
      instr_2LoopScheduler.add(raven_2_instrRoutineBegin(snapshot));
      instr_2LoopScheduler.add(raven_2_instrRoutineEachFrame());
      instr_2LoopScheduler.add(raven_2_instrRoutineEnd(snapshot));
      instr_2LoopScheduler.add(raven_gradeRoutineBegin(snapshot));
      instr_2LoopScheduler.add(raven_gradeRoutineEachFrame());
      instr_2LoopScheduler.add(raven_gradeRoutineEnd(snapshot));
      instr_2LoopScheduler.add(faces1_instrRoutineBegin(snapshot));
      instr_2LoopScheduler.add(faces1_instrRoutineEachFrame());
      instr_2LoopScheduler.add(faces1_instrRoutineEnd(snapshot));
      instr_2LoopScheduler.add(faces1_test_faceRoutineBegin(snapshot));
      instr_2LoopScheduler.add(faces1_test_faceRoutineEachFrame());
      instr_2LoopScheduler.add(faces1_test_faceRoutineEnd(snapshot));
      instr_2LoopScheduler.add(faces1_var_testRoutineBegin(snapshot));
      instr_2LoopScheduler.add(faces1_var_testRoutineEachFrame());
      instr_2LoopScheduler.add(faces1_var_testRoutineEnd(snapshot));
      instr_2LoopScheduler.add(faces_var_answer_testRoutineBegin(snapshot));
      instr_2LoopScheduler.add(faces_var_answer_testRoutineEachFrame());
      instr_2LoopScheduler.add(faces_var_answer_testRoutineEnd(snapshot));
      instr_2LoopScheduler.add(idiom_instrRoutineBegin(snapshot));
      instr_2LoopScheduler.add(idiom_instrRoutineEachFrame());
      instr_2LoopScheduler.add(idiom_instrRoutineEnd(snapshot));
      instr_2LoopScheduler.add(idiom_testRoutineBegin(snapshot));
      instr_2LoopScheduler.add(idiom_testRoutineEachFrame());
      instr_2LoopScheduler.add(idiom_testRoutineEnd(snapshot));
      instr_2LoopScheduler.add(idioms_answerRoutineBegin(snapshot));
      instr_2LoopScheduler.add(idioms_answerRoutineEachFrame());
      instr_2LoopScheduler.add(idioms_answerRoutineEnd(snapshot));
      instr_2LoopScheduler.add(aha_fakeRoutineBegin(snapshot));
      instr_2LoopScheduler.add(aha_fakeRoutineEachFrame());
      instr_2LoopScheduler.add(aha_fakeRoutineEnd(snapshot));
      instr_2LoopScheduler.add(grade_idioms_testRoutineBegin(snapshot));
      instr_2LoopScheduler.add(grade_idioms_testRoutineEachFrame());
      instr_2LoopScheduler.add(grade_idioms_testRoutineEnd(snapshot));
      instr_2LoopScheduler.add(instr_2LoopEndIteration(instr_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function instr_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instr_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function instr_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function pairsLoopBegin(pairsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pairs = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n_pairs, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tables/block2_cond1.xlsx',
      seed: undefined, name: 'pairs'
    });
    psychoJS.experiment.addLoop(pairs); // add the loop to the experiment
    currentLoop = pairs;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    pairs.forEach(function() {
      snapshot = pairs.getSnapshot();
    
      pairsLoopScheduler.add(importConditions(snapshot));
      pairsLoopScheduler.add(fixateRoutineBegin(snapshot));
      pairsLoopScheduler.add(fixateRoutineEachFrame());
      pairsLoopScheduler.add(fixateRoutineEnd(snapshot));
      pairsLoopScheduler.add(raven_1RoutineBegin(snapshot));
      pairsLoopScheduler.add(raven_1RoutineEachFrame());
      pairsLoopScheduler.add(raven_1RoutineEnd(snapshot));
      pairsLoopScheduler.add(raven_gradeRoutineBegin(snapshot));
      pairsLoopScheduler.add(raven_gradeRoutineEachFrame());
      pairsLoopScheduler.add(raven_gradeRoutineEnd(snapshot));
      pairsLoopScheduler.add(fixateRoutineBegin(snapshot));
      pairsLoopScheduler.add(fixateRoutineEachFrame());
      pairsLoopScheduler.add(fixateRoutineEnd(snapshot));
      const faces_loopLoopScheduler = new Scheduler(psychoJS);
      pairsLoopScheduler.add(faces_loopLoopBegin(faces_loopLoopScheduler, snapshot));
      pairsLoopScheduler.add(faces_loopLoopScheduler);
      pairsLoopScheduler.add(faces_loopLoopEnd);
      pairsLoopScheduler.add(fixateRoutineBegin(snapshot));
      pairsLoopScheduler.add(fixateRoutineEachFrame());
      pairsLoopScheduler.add(fixateRoutineEnd(snapshot));
      const idioms_loopLoopScheduler = new Scheduler(psychoJS);
      pairsLoopScheduler.add(idioms_loopLoopBegin(idioms_loopLoopScheduler, snapshot));
      pairsLoopScheduler.add(idioms_loopLoopScheduler);
      pairsLoopScheduler.add(idioms_loopLoopEnd);
      pairsLoopScheduler.add(grade_testRoutineBegin(snapshot));
      pairsLoopScheduler.add(grade_testRoutineEachFrame());
      pairsLoopScheduler.add(grade_testRoutineEnd(snapshot));
      pairsLoopScheduler.add(break_1RoutineBegin(snapshot));
      pairsLoopScheduler.add(break_1RoutineEachFrame());
      pairsLoopScheduler.add(break_1RoutineEnd(snapshot));
      pairsLoopScheduler.add(pairsLoopEndIteration(pairsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

function faces_loopLoopBegin(faces_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    faces_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'tables/faces2_cond1.xlsx', [face_order[pairs.thisN]]),
      seed: undefined, name: 'faces_loop'
    });
    psychoJS.experiment.addLoop(faces_loop); // add the loop to the experiment
    currentLoop = faces_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    faces_loop.forEach(function() {
      snapshot = faces_loop.getSnapshot();
    
      faces_loopLoopScheduler.add(importConditions(snapshot));
      faces_loopLoopScheduler.add(faces_1_faceRoutineBegin(snapshot));
      faces_loopLoopScheduler.add(faces_1_faceRoutineEachFrame());
      faces_loopLoopScheduler.add(faces_1_faceRoutineEnd(snapshot));
      faces_loopLoopScheduler.add(faces_1_varRoutineBegin(snapshot));
      faces_loopLoopScheduler.add(faces_1_varRoutineEachFrame());
      faces_loopLoopScheduler.add(faces_1_varRoutineEnd(snapshot));
      faces_loopLoopScheduler.add(faces_1_answerRoutineBegin(snapshot));
      faces_loopLoopScheduler.add(faces_1_answerRoutineEachFrame());
      faces_loopLoopScheduler.add(faces_1_answerRoutineEnd(snapshot));
      faces_loopLoopScheduler.add(faces_loopLoopEndIteration(faces_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function faces_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(faces_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function faces_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function idioms_loopLoopBegin(idioms_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    idioms_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'tables/idioms1_cond1.xlsx', [idioms_order[pairs.thisN]]),
      seed: undefined, name: 'idioms_loop'
    });
    psychoJS.experiment.addLoop(idioms_loop); // add the loop to the experiment
    currentLoop = idioms_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    idioms_loop.forEach(function() {
      snapshot = idioms_loop.getSnapshot();
    
      idioms_loopLoopScheduler.add(importConditions(snapshot));
      idioms_loopLoopScheduler.add(idioms_taskRoutineBegin(snapshot));
      idioms_loopLoopScheduler.add(idioms_taskRoutineEachFrame());
      idioms_loopLoopScheduler.add(idioms_taskRoutineEnd(snapshot));
      idioms_loopLoopScheduler.add(idioms_right_answerRoutineBegin(snapshot));
      idioms_loopLoopScheduler.add(idioms_right_answerRoutineEachFrame());
      idioms_loopLoopScheduler.add(idioms_right_answerRoutineEnd(snapshot));
      idioms_loopLoopScheduler.add(ahaRoutineBegin(snapshot));
      idioms_loopLoopScheduler.add(ahaRoutineEachFrame());
      idioms_loopLoopScheduler.add(ahaRoutineEnd(snapshot));
      idioms_loopLoopScheduler.add(idioms_loopLoopEndIteration(idioms_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function idioms_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(idioms_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function idioms_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function pairsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pairs);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function pairsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function instr_raven_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_raven_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instr_raven_1Clock.reset();
    routineTimer.reset();
    instr_raven_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    instr_raven_1MaxDuration = null
    // keep track of which components have finished
    instr_raven_1Components = [];
    instr_raven_1Components.push(text_instr_raven_1);
    instr_raven_1Components.push(key_resp_7);
    
    instr_raven_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function instr_raven_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_raven_1' ---
    // get current time
    t = instr_raven_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr_raven_1* updates
    if (t >= 0.0 && text_instr_raven_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr_raven_1.tStart = t;  // (not accounting for frame time here)
      text_instr_raven_1.frameNStart = frameN;  // exact frame index
      
      text_instr_raven_1.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_raven_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_raven_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_raven_1' ---
    instr_raven_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_7.stop();
    // the Routine "instr_raven_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function raven_1_testtRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'raven_1_testt' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    raven_1_testtClock.reset();
    routineTimer.reset();
    raven_1_testtMaxDurationReached = false;
    // update component parameters for each repeat
    key_raven_test.keys = undefined;
    key_raven_test.rt = undefined;
    _key_raven_test_allKeys = [];
    psychoJS.experiment.addData('raven_1_testt.started', globalClock.getTime());
    raven_1_testtMaxDuration = null
    // keep track of which components have finished
    raven_1_testtComponents = [];
    raven_1_testtComponents.push(key_raven_test);
    raven_1_testtComponents.push(img_raven_1_test);
    raven_1_testtComponents.push(text_11);
    
    raven_1_testtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function raven_1_testtRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'raven_1_testt' ---
    // get current time
    t = raven_1_testtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_raven_test* updates
    if (t >= 0.0 && key_raven_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_raven_test.tStart = t;  // (not accounting for frame time here)
      key_raven_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_raven_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_raven_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_raven_test.clearEvents(); });
    }
    
    if (key_raven_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_raven_test.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_raven_test_allKeys = _key_raven_test_allKeys.concat(theseKeys);
      if (_key_raven_test_allKeys.length > 0) {
        key_raven_test.keys = _key_raven_test_allKeys[_key_raven_test_allKeys.length - 1].name;  // just the last key pressed
        key_raven_test.rt = _key_raven_test_allKeys[_key_raven_test_allKeys.length - 1].rt;
        key_raven_test.duration = _key_raven_test_allKeys[_key_raven_test_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *img_raven_1_test* updates
    if (t >= 0.0 && img_raven_1_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_raven_1_test.tStart = t;  // (not accounting for frame time here)
      img_raven_1_test.frameNStart = frameN;  // exact frame index
      
      img_raven_1_test.setAutoDraw(true);
    }
    
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    raven_1_testtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function raven_1_testtRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'raven_1_testt' ---
    raven_1_testtComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('raven_1_testt.stopped', globalClock.getTime());
    key_raven_test.stop();
    // the Routine "raven_1_testt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function insight_fake_solveRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'insight_fake_solve' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    insight_fake_solveClock.reset();
    routineTimer.reset();
    insight_fake_solveMaxDurationReached = false;
    // update component parameters for each repeat
    key_insight_fake_solve.keys = undefined;
    key_insight_fake_solve.rt = undefined;
    _key_insight_fake_solve_allKeys = [];
    psychoJS.experiment.addData('insight_fake_solve.started', globalClock.getTime());
    insight_fake_solveMaxDuration = null
    // keep track of which components have finished
    insight_fake_solveComponents = [];
    insight_fake_solveComponents.push(text_insight_fake_solve);
    insight_fake_solveComponents.push(key_insight_fake_solve);
    
    insight_fake_solveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function insight_fake_solveRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'insight_fake_solve' ---
    // get current time
    t = insight_fake_solveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_insight_fake_solve* updates
    if (t >= 0.0 && text_insight_fake_solve.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_insight_fake_solve.tStart = t;  // (not accounting for frame time here)
      text_insight_fake_solve.frameNStart = frameN;  // exact frame index
      
      text_insight_fake_solve.setAutoDraw(true);
    }
    
    
    // *key_insight_fake_solve* updates
    if (t >= 0.0 && key_insight_fake_solve.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_insight_fake_solve.tStart = t;  // (not accounting for frame time here)
      key_insight_fake_solve.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_insight_fake_solve.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_insight_fake_solve.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_insight_fake_solve.clearEvents(); });
    }
    
    if (key_insight_fake_solve.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_insight_fake_solve.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_insight_fake_solve_allKeys = _key_insight_fake_solve_allKeys.concat(theseKeys);
      if (_key_insight_fake_solve_allKeys.length > 0) {
        key_insight_fake_solve.keys = _key_insight_fake_solve_allKeys[_key_insight_fake_solve_allKeys.length - 1].name;  // just the last key pressed
        key_insight_fake_solve.rt = _key_insight_fake_solve_allKeys[_key_insight_fake_solve_allKeys.length - 1].rt;
        key_insight_fake_solve.duration = _key_insight_fake_solve_allKeys[_key_insight_fake_solve_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    insight_fake_solveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function insight_fake_solveRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'insight_fake_solve' ---
    insight_fake_solveComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('insight_fake_solve.stopped', globalClock.getTime());
    key_insight_fake_solve.stop();
    // the Routine "insight_fake_solve" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function aha_fakeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'aha_fake' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    aha_fakeClock.reset();
    routineTimer.reset();
    aha_fakeMaxDurationReached = false;
    // update component parameters for each repeat
    aha_fake_key.keys = undefined;
    aha_fake_key.rt = undefined;
    _aha_fake_key_allKeys = [];
    aha_fakeMaxDuration = null
    // keep track of which components have finished
    aha_fakeComponents = [];
    aha_fakeComponents.push(aha_fake_2);
    aha_fakeComponents.push(aha_fake_key);
    
    aha_fakeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function aha_fakeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'aha_fake' ---
    // get current time
    t = aha_fakeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *aha_fake_2* updates
    if (t >= 0.0 && aha_fake_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      aha_fake_2.tStart = t;  // (not accounting for frame time here)
      aha_fake_2.frameNStart = frameN;  // exact frame index
      
      aha_fake_2.setAutoDraw(true);
    }
    
    
    // *aha_fake_key* updates
    if (t >= 0.0 && aha_fake_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      aha_fake_key.tStart = t;  // (not accounting for frame time here)
      aha_fake_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { aha_fake_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { aha_fake_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { aha_fake_key.clearEvents(); });
    }
    
    if (aha_fake_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = aha_fake_key.getKeys({keyList: ['0', '1', '2', '3', '4', '5'], waitRelease: false});
      _aha_fake_key_allKeys = _aha_fake_key_allKeys.concat(theseKeys);
      if (_aha_fake_key_allKeys.length > 0) {
        aha_fake_key.keys = _aha_fake_key_allKeys[_aha_fake_key_allKeys.length - 1].name;  // just the last key pressed
        aha_fake_key.rt = _aha_fake_key_allKeys[_aha_fake_key_allKeys.length - 1].rt;
        aha_fake_key.duration = _aha_fake_key_allKeys[_aha_fake_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    aha_fakeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function aha_fakeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'aha_fake' ---
    aha_fakeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    aha_fake_key.stop();
    // the Routine "aha_fake" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function faces1_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faces1_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    faces1_instrClock.reset();
    routineTimer.reset();
    faces1_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    psychoJS.experiment.addData('faces1_instr.started', globalClock.getTime());
    faces1_instrMaxDuration = null
    // keep track of which components have finished
    faces1_instrComponents = [];
    faces1_instrComponents.push(text_9);
    faces1_instrComponents.push(key_resp_10);
    
    faces1_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function faces1_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faces1_instr' ---
    // get current time
    t = faces1_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    faces1_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function faces1_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faces1_instr' ---
    faces1_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('faces1_instr.stopped', globalClock.getTime());
    key_resp_10.stop();
    // the Routine "faces1_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function faces1_test_faceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faces1_test_face' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    faces1_test_faceClock.reset();
    routineTimer.reset();
    faces1_test_faceMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('faces1_test_face.started', globalClock.getTime());
    faces1_test_faceMaxDuration = 5
    // keep track of which components have finished
    faces1_test_faceComponents = [];
    faces1_test_faceComponents.push(img_faces_1_test);
    
    faces1_test_faceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function faces1_test_faceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faces1_test_face' ---
    // get current time
    t = faces1_test_faceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > faces1_test_faceMaxDuration) {
        faces1_test_faceMaxDurationReached = true
        continueRoutine = false
    }
    
    // *img_faces_1_test* updates
    if (t >= 0.0 && img_faces_1_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_faces_1_test.tStart = t;  // (not accounting for frame time here)
      img_faces_1_test.frameNStart = frameN;  // exact frame index
      
      img_faces_1_test.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    faces1_test_faceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function faces1_test_faceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faces1_test_face' ---
    faces1_test_faceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('faces1_test_face.stopped', globalClock.getTime());
    // the Routine "faces1_test_face" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function faces1_var_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faces1_var_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    faces1_var_testClock.reset();
    routineTimer.reset();
    faces1_var_testMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_33.keys = undefined;
    key_resp_33.rt = undefined;
    _key_resp_33_allKeys = [];
    psychoJS.experiment.addData('faces1_var_test.started', globalClock.getTime());
    faces1_var_testMaxDuration = null
    // keep track of which components have finished
    faces1_var_testComponents = [];
    faces1_var_testComponents.push(text_100);
    faces1_var_testComponents.push(text_200);
    faces1_var_testComponents.push(text_300);
    faces1_var_testComponents.push(text_400);
    faces1_var_testComponents.push(key_resp_33);
    faces1_var_testComponents.push(img_000);
    
    faces1_var_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function faces1_var_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faces1_var_test' ---
    // get current time
    t = faces1_var_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_100* updates
    if (t >= 0.0 && text_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100.tStart = t;  // (not accounting for frame time here)
      text_100.frameNStart = frameN;  // exact frame index
      
      text_100.setAutoDraw(true);
    }
    
    
    // *text_200* updates
    if (t >= 0.0 && text_200.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_200.tStart = t;  // (not accounting for frame time here)
      text_200.frameNStart = frameN;  // exact frame index
      
      text_200.setAutoDraw(true);
    }
    
    
    // *text_300* updates
    if (t >= 0.0 && text_300.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_300.tStart = t;  // (not accounting for frame time here)
      text_300.frameNStart = frameN;  // exact frame index
      
      text_300.setAutoDraw(true);
    }
    
    
    // *text_400* updates
    if (t >= 0.0 && text_400.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_400.tStart = t;  // (not accounting for frame time here)
      text_400.frameNStart = frameN;  // exact frame index
      
      text_400.setAutoDraw(true);
    }
    
    
    // *key_resp_33* updates
    if (t >= 0.0 && key_resp_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_33.tStart = t;  // (not accounting for frame time here)
      key_resp_33.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_33.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_33.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_33.clearEvents(); });
    }
    
    if (key_resp_33.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_33.getKeys({keyList: ['1', '2', '3', '4', 'space'], waitRelease: false});
      _key_resp_33_allKeys = _key_resp_33_allKeys.concat(theseKeys);
      if (_key_resp_33_allKeys.length > 0) {
        key_resp_33.keys = _key_resp_33_allKeys[_key_resp_33_allKeys.length - 1].name;  // just the last key pressed
        key_resp_33.rt = _key_resp_33_allKeys[_key_resp_33_allKeys.length - 1].rt;
        key_resp_33.duration = _key_resp_33_allKeys[_key_resp_33_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *img_000* updates
    if (t >= 0.0 && img_000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_000.tStart = t;  // (not accounting for frame time here)
      img_000.frameNStart = frameN;  // exact frame index
      
      img_000.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    faces1_var_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function faces1_var_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faces1_var_test' ---
    faces1_var_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('faces1_var_test.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_33.corr, level);
    }
    psychoJS.experiment.addData('key_resp_33.keys', key_resp_33.keys);
    if (typeof key_resp_33.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_33.rt', key_resp_33.rt);
        psychoJS.experiment.addData('key_resp_33.duration', key_resp_33.duration);
        routineTimer.reset();
        }
    
    key_resp_33.stop();
    // the Routine "faces1_var_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function faces_var_answer_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faces_var_answer_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    faces_var_answer_testClock.reset();
    routineTimer.reset();
    faces_var_answer_testMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('faces_var_answer_test.started', globalClock.getTime());
    faces_var_answer_testMaxDuration = 3
    // keep track of which components have finished
    faces_var_answer_testComponents = [];
    faces_var_answer_testComponents.push(text_28);
    faces_var_answer_testComponents.push(image_6);
    
    faces_var_answer_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function faces_var_answer_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faces_var_answer_test' ---
    // get current time
    t = faces_var_answer_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > faces_var_answer_testMaxDuration) {
        faces_var_answer_testMaxDurationReached = true
        continueRoutine = false
    }
    
    // *text_28* updates
    if (t >= 0.1 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }
    
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    faces_var_answer_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function faces_var_answer_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faces_var_answer_test' ---
    faces_var_answer_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('faces_var_answer_test.stopped', globalClock.getTime());
    // the Routine "faces_var_answer_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function idiom_instr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'idiom_instr_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    idiom_instr_1Clock.reset();
    routineTimer.reset();
    idiom_instr_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_34.keys = undefined;
    key_resp_34.rt = undefined;
    _key_resp_34_allKeys = [];
    psychoJS.experiment.addData('idiom_instr_1.started', globalClock.getTime());
    idiom_instr_1MaxDuration = null
    // keep track of which components have finished
    idiom_instr_1Components = [];
    idiom_instr_1Components.push(text_29);
    idiom_instr_1Components.push(key_resp_34);
    
    idiom_instr_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function idiom_instr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'idiom_instr_1' ---
    // get current time
    t = idiom_instr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_29* updates
    if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }
    
    
    // *key_resp_34* updates
    if (t >= 0.0 && key_resp_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_34.tStart = t;  // (not accounting for frame time here)
      key_resp_34.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_34.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_34.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_34.clearEvents(); });
    }
    
    if (key_resp_34.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_34.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_34_allKeys = _key_resp_34_allKeys.concat(theseKeys);
      if (_key_resp_34_allKeys.length > 0) {
        key_resp_34.keys = _key_resp_34_allKeys[_key_resp_34_allKeys.length - 1].name;  // just the last key pressed
        key_resp_34.rt = _key_resp_34_allKeys[_key_resp_34_allKeys.length - 1].rt;
        key_resp_34.duration = _key_resp_34_allKeys[_key_resp_34_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    idiom_instr_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function idiom_instr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'idiom_instr_1' ---
    idiom_instr_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('idiom_instr_1.stopped', globalClock.getTime());
    key_resp_34.stop();
    // the Routine "idiom_instr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function idiom1_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'idiom1_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    idiom1_testClock.reset();
    routineTimer.reset();
    idiom1_testMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_35.keys = undefined;
    key_resp_35.rt = undefined;
    _key_resp_35_allKeys = [];
    psychoJS.experiment.addData('idiom1_test.started', globalClock.getTime());
    idiom1_testMaxDuration = 3
    // keep track of which components have finished
    idiom1_testComponents = [];
    idiom1_testComponents.push(image_7);
    idiom1_testComponents.push(key_resp_35);
    
    idiom1_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function idiom1_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'idiom1_test' ---
    // get current time
    t = idiom1_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > idiom1_testMaxDuration) {
        idiom1_testMaxDurationReached = true
        continueRoutine = false
    }
    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }
    
    
    // *key_resp_35* updates
    if (t >= 0.0 && key_resp_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_35.tStart = t;  // (not accounting for frame time here)
      key_resp_35.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_35.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_35.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_35.clearEvents(); });
    }
    
    if (key_resp_35.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_35.getKeys({keyList: ['y', 'n', 'left', 'right', 'retirn'], waitRelease: false});
      _key_resp_35_allKeys = _key_resp_35_allKeys.concat(theseKeys);
      if (_key_resp_35_allKeys.length > 0) {
        key_resp_35.keys = _key_resp_35_allKeys[_key_resp_35_allKeys.length - 1].name;  // just the last key pressed
        key_resp_35.rt = _key_resp_35_allKeys[_key_resp_35_allKeys.length - 1].rt;
        key_resp_35.duration = _key_resp_35_allKeys[_key_resp_35_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    idiom1_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function idiom1_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'idiom1_test' ---
    idiom1_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('idiom1_test.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_35.corr, level);
    }
    psychoJS.experiment.addData('key_resp_35.keys', key_resp_35.keys);
    if (typeof key_resp_35.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_35.rt', key_resp_35.rt);
        psychoJS.experiment.addData('key_resp_35.duration', key_resp_35.duration);
        routineTimer.reset();
        }
    
    key_resp_35.stop();
    // the Routine "idiom1_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function true_or_not_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'true_or_not_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    true_or_not_instrClock.reset();
    routineTimer.reset();
    true_or_not_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_25.keys = undefined;
    key_resp_25.rt = undefined;
    _key_resp_25_allKeys = [];
    psychoJS.experiment.addData('true_or_not_instr.started', globalClock.getTime());
    true_or_not_instrMaxDuration = null
    // keep track of which components have finished
    true_or_not_instrComponents = [];
    true_or_not_instrComponents.push(image_45);
    true_or_not_instrComponents.push(text_20);
    true_or_not_instrComponents.push(text_21);
    true_or_not_instrComponents.push(key_resp_25);
    
    true_or_not_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function true_or_not_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'true_or_not_instr' ---
    // get current time
    t = true_or_not_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_45* updates
    if (t >= 0.0 && image_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_45.tStart = t;  // (not accounting for frame time here)
      image_45.frameNStart = frameN;  // exact frame index
      
      image_45.setAutoDraw(true);
    }
    
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }
    
    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }
    
    
    // *key_resp_25* updates
    if (t >= 0.0 && key_resp_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_25.tStart = t;  // (not accounting for frame time here)
      key_resp_25.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_25.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.clearEvents(); });
    }
    
    if (key_resp_25.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_25.getKeys({keyList: ['1', '2', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_25_allKeys = _key_resp_25_allKeys.concat(theseKeys);
      if (_key_resp_25_allKeys.length > 0) {
        key_resp_25.keys = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].name;  // just the last key pressed
        key_resp_25.rt = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].rt;
        key_resp_25.duration = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    true_or_not_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function true_or_not_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'true_or_not_instr' ---
    true_or_not_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('true_or_not_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_25.corr, level);
    }
    psychoJS.experiment.addData('key_resp_25.keys', key_resp_25.keys);
    if (typeof key_resp_25.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_25.rt', key_resp_25.rt);
        psychoJS.experiment.addData('key_resp_25.duration', key_resp_25.duration);
        routineTimer.reset();
        }
    
    key_resp_25.stop();
    // the Routine "true_or_not_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function insight_fakeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'insight_fake' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    insight_fakeClock.reset();
    routineTimer.reset();
    insight_fakeMaxDurationReached = false;
    // update component parameters for each repeat
    insight_fake_key.keys = undefined;
    insight_fake_key.rt = undefined;
    _insight_fake_key_allKeys = [];
    psychoJS.experiment.addData('insight_fake.started', globalClock.getTime());
    insight_fakeMaxDuration = null
    // keep track of which components have finished
    insight_fakeComponents = [];
    insight_fakeComponents.push(insight_fake_text);
    insight_fakeComponents.push(insight_fake_key);
    
    insight_fakeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function insight_fakeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'insight_fake' ---
    // get current time
    t = insight_fakeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *insight_fake_text* updates
    if (t >= 0.0 && insight_fake_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      insight_fake_text.tStart = t;  // (not accounting for frame time here)
      insight_fake_text.frameNStart = frameN;  // exact frame index
      
      insight_fake_text.setAutoDraw(true);
    }
    
    
    // *insight_fake_key* updates
    if (t >= 0.0 && insight_fake_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      insight_fake_key.tStart = t;  // (not accounting for frame time here)
      insight_fake_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { insight_fake_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { insight_fake_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { insight_fake_key.clearEvents(); });
    }
    
    if (insight_fake_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = insight_fake_key.getKeys({keyList: ['1', '2'], waitRelease: false});
      _insight_fake_key_allKeys = _insight_fake_key_allKeys.concat(theseKeys);
      if (_insight_fake_key_allKeys.length > 0) {
        insight_fake_key.keys = _insight_fake_key_allKeys[_insight_fake_key_allKeys.length - 1].name;  // just the last key pressed
        insight_fake_key.rt = _insight_fake_key_allKeys[_insight_fake_key_allKeys.length - 1].rt;
        insight_fake_key.duration = _insight_fake_key_allKeys[_insight_fake_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    insight_fakeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function insight_fakeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'insight_fake' ---
    insight_fakeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('insight_fake.stopped', globalClock.getTime());
    insight_fake_key.stop();
    // the Routine "insight_fake" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function block_2_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_2_start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    block_2_startClock.reset();
    routineTimer.reset();
    block_2_startMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    block_2_startMaxDuration = null
    // keep track of which components have finished
    block_2_startComponents = [];
    block_2_startComponents.push(text_4);
    block_2_startComponents.push(key_resp_5);
    
    block_2_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function block_2_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_2_start' ---
    // get current time
    t = block_2_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block_2_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function block_2_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_2_start' ---
    block_2_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_5.stop();
    // the Routine "block_2_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function fixateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixate' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixateClock.reset();
    routineTimer.reset();
    fixateMaxDurationReached = false;
    // update component parameters for each repeat
    fixateMaxDuration = 1.0
    // keep track of which components have finished
    fixateComponents = [];
    fixateComponents.push(polygon);
    
    fixateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function fixateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixate' ---
    // get current time
    t = fixateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > fixateMaxDuration) {
        fixateMaxDurationReached = true
        continueRoutine = false
    }
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function fixateRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixate' ---
    fixateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "fixate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ravenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'raven' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ravenClock.reset();
    routineTimer.reset();
    ravenMaxDurationReached = false;
    // update component parameters for each repeat
    image.setImage(raven_2_path);
    key_resp_26.keys = undefined;
    key_resp_26.rt = undefined;
    _key_resp_26_allKeys = [];
    psychoJS.experiment.addData('raven.started', globalClock.getTime());
    ravenMaxDuration = 10
    // keep track of which components have finished
    ravenComponents = [];
    ravenComponents.push(image);
    ravenComponents.push(key_resp_26);
    
    ravenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function ravenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'raven' ---
    // get current time
    t = ravenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > ravenMaxDuration) {
        ravenMaxDurationReached = true
        continueRoutine = false
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // *key_resp_26* updates
    if (t >= 0.0 && key_resp_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_26.tStart = t;  // (not accounting for frame time here)
      key_resp_26.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_26.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_26.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_26.clearEvents(); });
    }
    
    if (key_resp_26.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_26.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_26_allKeys = _key_resp_26_allKeys.concat(theseKeys);
      if (_key_resp_26_allKeys.length > 0) {
        key_resp_26.keys = _key_resp_26_allKeys[_key_resp_26_allKeys.length - 1].name;  // just the last key pressed
        key_resp_26.rt = _key_resp_26_allKeys[_key_resp_26_allKeys.length - 1].rt;
        key_resp_26.duration = _key_resp_26_allKeys[_key_resp_26_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ravenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ravenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'raven' ---
    ravenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('raven.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_26.corr, level);
    }
    psychoJS.experiment.addData('key_resp_26.keys', key_resp_26.keys);
    if (typeof key_resp_26.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_26.rt', key_resp_26.rt);
        psychoJS.experiment.addData('key_resp_26.duration', key_resp_26.duration);
        routineTimer.reset();
        }
    
    key_resp_26.stop();
    // the Routine "raven" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function aha_fake_solveRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'aha_fake_solve' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    aha_fake_solveClock.reset();
    routineTimer.reset();
    aha_fake_solveMaxDurationReached = false;
    // update component parameters for each repeat
    key_aha_fake_solve.keys = undefined;
    key_aha_fake_solve.rt = undefined;
    _key_aha_fake_solve_allKeys = [];
    psychoJS.experiment.addData('aha_fake_solve.started', globalClock.getTime());
    aha_fake_solveMaxDuration = null
    // keep track of which components have finished
    aha_fake_solveComponents = [];
    aha_fake_solveComponents.push(text_aha_fake_solve);
    aha_fake_solveComponents.push(key_aha_fake_solve);
    
    aha_fake_solveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function aha_fake_solveRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'aha_fake_solve' ---
    // get current time
    t = aha_fake_solveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_aha_fake_solve* updates
    if (t >= 0.0 && text_aha_fake_solve.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_aha_fake_solve.tStart = t;  // (not accounting for frame time here)
      text_aha_fake_solve.frameNStart = frameN;  // exact frame index
      
      text_aha_fake_solve.setAutoDraw(true);
    }
    
    
    // *key_aha_fake_solve* updates
    if (t >= 0.0 && key_aha_fake_solve.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_aha_fake_solve.tStart = t;  // (not accounting for frame time here)
      key_aha_fake_solve.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_aha_fake_solve.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_aha_fake_solve.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_aha_fake_solve.clearEvents(); });
    }
    
    if (key_aha_fake_solve.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_aha_fake_solve.getKeys({keyList: ['0', '1', '2', '3', '4', '5'], waitRelease: false});
      _key_aha_fake_solve_allKeys = _key_aha_fake_solve_allKeys.concat(theseKeys);
      if (_key_aha_fake_solve_allKeys.length > 0) {
        key_aha_fake_solve.keys = _key_aha_fake_solve_allKeys[_key_aha_fake_solve_allKeys.length - 1].name;  // just the last key pressed
        key_aha_fake_solve.rt = _key_aha_fake_solve_allKeys[_key_aha_fake_solve_allKeys.length - 1].rt;
        key_aha_fake_solve.duration = _key_aha_fake_solve_allKeys[_key_aha_fake_solve_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    aha_fake_solveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function aha_fake_solveRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'aha_fake_solve' ---
    aha_fake_solveComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('aha_fake_solve.stopped', globalClock.getTime());
    key_aha_fake_solve.stop();
    // the Routine "aha_fake_solve" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function faces_1_faceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faces_1_face' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    faces_1_faceClock.reset();
    routineTimer.reset();
    faces_1_faceMaxDurationReached = false;
    // update component parameters for each repeat
    img_faces_1_face.setImage(face);
    psychoJS.experiment.addData('faces_1_face.started', globalClock.getTime());
    faces_1_faceMaxDuration = 3
    // keep track of which components have finished
    faces_1_faceComponents = [];
    faces_1_faceComponents.push(img_faces_1_face);
    
    faces_1_faceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function faces_1_faceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faces_1_face' ---
    // get current time
    t = faces_1_faceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > faces_1_faceMaxDuration) {
        faces_1_faceMaxDurationReached = true
        continueRoutine = false
    }
    
    // *img_faces_1_face* updates
    if (t >= 0.0 && img_faces_1_face.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_faces_1_face.tStart = t;  // (not accounting for frame time here)
      img_faces_1_face.frameNStart = frameN;  // exact frame index
      
      img_faces_1_face.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    faces_1_faceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function faces_1_faceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faces_1_face' ---
    faces_1_faceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('faces_1_face.stopped', globalClock.getTime());
    // the Routine "faces_1_face" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function faces_1_varRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faces_1_var' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    faces_1_varClock.reset();
    routineTimer.reset();
    faces_1_varMaxDurationReached = false;
    // update component parameters for each repeat
    text_faces1_1.setText(variants1);
    text_faces1_2.setText(variants2);
    text_faces1_3.setText(variants3);
    text_faces1_4.setText(variants4);
    img_faces1_var.setImage(face);
    key_resp_24.keys = undefined;
    key_resp_24.rt = undefined;
    _key_resp_24_allKeys = [];
    psychoJS.experiment.addData('faces_1_var.started', globalClock.getTime());
    faces_1_varMaxDuration = null
    // keep track of which components have finished
    faces_1_varComponents = [];
    faces_1_varComponents.push(text_faces1_1);
    faces_1_varComponents.push(text_faces1_2);
    faces_1_varComponents.push(text_faces1_3);
    faces_1_varComponents.push(text_faces1_4);
    faces_1_varComponents.push(img_faces1_var);
    faces_1_varComponents.push(key_resp_24);
    
    faces_1_varComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function faces_1_varRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faces_1_var' ---
    // get current time
    t = faces_1_varClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_faces1_1* updates
    if (t >= 0.0 && text_faces1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_faces1_1.tStart = t;  // (not accounting for frame time here)
      text_faces1_1.frameNStart = frameN;  // exact frame index
      
      text_faces1_1.setAutoDraw(true);
    }
    
    
    // *text_faces1_2* updates
    if (t >= 0.0 && text_faces1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_faces1_2.tStart = t;  // (not accounting for frame time here)
      text_faces1_2.frameNStart = frameN;  // exact frame index
      
      text_faces1_2.setAutoDraw(true);
    }
    
    
    // *text_faces1_3* updates
    if (t >= 0.0 && text_faces1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_faces1_3.tStart = t;  // (not accounting for frame time here)
      text_faces1_3.frameNStart = frameN;  // exact frame index
      
      text_faces1_3.setAutoDraw(true);
    }
    
    
    // *text_faces1_4* updates
    if (t >= 0.0 && text_faces1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_faces1_4.tStart = t;  // (not accounting for frame time here)
      text_faces1_4.frameNStart = frameN;  // exact frame index
      
      text_faces1_4.setAutoDraw(true);
    }
    
    
    // *img_faces1_var* updates
    if (t >= 0.0 && img_faces1_var.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_faces1_var.tStart = t;  // (not accounting for frame time here)
      img_faces1_var.frameNStart = frameN;  // exact frame index
      
      img_faces1_var.setAutoDraw(true);
    }
    
    
    // *key_resp_24* updates
    if (t >= 0.0 && key_resp_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_24.tStart = t;  // (not accounting for frame time here)
      key_resp_24.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_24.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.clearEvents(); });
    }
    
    if (key_resp_24.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_24.getKeys({keyList: ['1', '2', '3', '4', 'space'], waitRelease: false});
      _key_resp_24_allKeys = _key_resp_24_allKeys.concat(theseKeys);
      if (_key_resp_24_allKeys.length > 0) {
        key_resp_24.keys = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].name;  // just the last key pressed
        key_resp_24.rt = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].rt;
        key_resp_24.duration = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    faces_1_varComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function faces_1_varRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faces_1_var' ---
    faces_1_varComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('faces_1_var.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_24.corr, level);
    }
    psychoJS.experiment.addData('key_resp_24.keys', key_resp_24.keys);
    if (typeof key_resp_24.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_24.rt', key_resp_24.rt);
        psychoJS.experiment.addData('key_resp_24.duration', key_resp_24.duration);
        routineTimer.reset();
        }
    
    key_resp_24.stop();
    // the Routine "faces_1_var" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function faces_1_answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faces_1_answer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    faces_1_answerClock.reset();
    routineTimer.reset();
    faces_1_answerMaxDurationReached = false;
    // update component parameters for each repeat
    img_faces_1_answer.setImage(face);
    text_faces_1_answer.setText(emo_right);
    psychoJS.experiment.addData('faces_1_answer.started', globalClock.getTime());
    faces_1_answerMaxDuration = 3
    // keep track of which components have finished
    faces_1_answerComponents = [];
    faces_1_answerComponents.push(img_faces_1_answer);
    faces_1_answerComponents.push(text_faces_1_answer);
    
    faces_1_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function faces_1_answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faces_1_answer' ---
    // get current time
    t = faces_1_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > faces_1_answerMaxDuration) {
        faces_1_answerMaxDurationReached = true
        continueRoutine = false
    }
    
    // *img_faces_1_answer* updates
    if (t >= 0.0 && img_faces_1_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_faces_1_answer.tStart = t;  // (not accounting for frame time here)
      img_faces_1_answer.frameNStart = frameN;  // exact frame index
      
      img_faces_1_answer.setAutoDraw(true);
    }
    
    
    // *text_faces_1_answer* updates
    if (t >= 0.1 && text_faces_1_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_faces_1_answer.tStart = t;  // (not accounting for frame time here)
      text_faces_1_answer.frameNStart = frameN;  // exact frame index
      
      text_faces_1_answer.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    faces_1_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function faces_1_answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faces_1_answer' ---
    faces_1_answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('faces_1_answer.stopped', globalClock.getTime());
    // the Routine "faces_1_answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function idioms1_imageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'idioms1_image' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    idioms1_imageClock.reset();
    routineTimer.reset();
    idioms1_imageMaxDurationReached = false;
    // update component parameters for each repeat
    image_5.setImage(rebus_pic);
    psychoJS.experiment.addData('idioms1_image.started', globalClock.getTime());
    idioms1_imageMaxDuration = 3
    // keep track of which components have finished
    idioms1_imageComponents = [];
    idioms1_imageComponents.push(image_5);
    
    idioms1_imageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function idioms1_imageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'idioms1_image' ---
    // get current time
    t = idioms1_imageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > idioms1_imageMaxDuration) {
        idioms1_imageMaxDurationReached = true
        continueRoutine = false
    }
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    idioms1_imageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function idioms1_imageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'idioms1_image' ---
    idioms1_imageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('idioms1_image.stopped', globalClock.getTime());
    // the Routine "idioms1_image" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function true_or_notRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'true_or_not' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    true_or_notClock.reset();
    routineTimer.reset();
    true_or_notMaxDurationReached = false;
    // update component parameters for each repeat
    image_47.setImage(rebus_pic);
    text_23.setText(rebus_variants);
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    psychoJS.experiment.addData('true_or_not.started', globalClock.getTime());
    true_or_notMaxDuration = null
    // keep track of which components have finished
    true_or_notComponents = [];
    true_or_notComponents.push(image_47);
    true_or_notComponents.push(text_23);
    true_or_notComponents.push(text_24);
    true_or_notComponents.push(key_resp_12);
    
    true_or_notComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function true_or_notRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'true_or_not' ---
    // get current time
    t = true_or_notClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_47* updates
    if (t >= 0.0 && image_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_47.tStart = t;  // (not accounting for frame time here)
      image_47.frameNStart = frameN;  // exact frame index
      
      image_47.setAutoDraw(true);
    }
    
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }
    
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }
    
    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }
    
    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['1', '2', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    true_or_notComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function true_or_notRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'true_or_not' ---
    true_or_notComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('true_or_not.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "true_or_not" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'break_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    break_2Clock.reset();
    routineTimer.reset();
    break_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    break_2MaxDuration = 20
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(text_5);
    break_2Components.push(key_resp_6);
    
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function break_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'break_2' ---
    // get current time
    t = break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > break_2MaxDuration) {
        break_2MaxDurationReached = true
        continueRoutine = false
    }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function break_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'break_2' ---
    break_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_6.stop();
    // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function block_2_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_2_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    block_2_instrClock.reset();
    routineTimer.reset();
    block_2_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_28.keys = undefined;
    key_resp_28.rt = undefined;
    _key_resp_28_allKeys = [];
    psychoJS.experiment.addData('block_2_instr.started', globalClock.getTime());
    block_2_instrMaxDuration = null
    // keep track of which components have finished
    block_2_instrComponents = [];
    block_2_instrComponents.push(text_25);
    block_2_instrComponents.push(key_resp_28);
    
    block_2_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function block_2_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_2_instr' ---
    // get current time
    t = block_2_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }
    
    
    // *key_resp_28* updates
    if (t >= 0.0 && key_resp_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_28.tStart = t;  // (not accounting for frame time here)
      key_resp_28.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_28.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_28.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_28.clearEvents(); });
    }
    
    if (key_resp_28.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_28.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_28_allKeys = _key_resp_28_allKeys.concat(theseKeys);
      if (_key_resp_28_allKeys.length > 0) {
        key_resp_28.keys = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].name;  // just the last key pressed
        key_resp_28.rt = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].rt;
        key_resp_28.duration = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block_2_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function block_2_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_2_instr' ---
    block_2_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('block_2_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_28.corr, level);
    }
    psychoJS.experiment.addData('key_resp_28.keys', key_resp_28.keys);
    if (typeof key_resp_28.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_28.rt', key_resp_28.rt);
        psychoJS.experiment.addData('key_resp_28.duration', key_resp_28.duration);
        routineTimer.reset();
        }
    
    key_resp_28.stop();
    // the Routine "block_2_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instr_2_ravenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_2_raven' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instr_2_ravenClock.reset();
    routineTimer.reset();
    instr_2_ravenMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_21.keys = undefined;
    key_resp_21.rt = undefined;
    _key_resp_21_allKeys = [];
    psychoJS.experiment.addData('instr_2_raven.started', globalClock.getTime());
    instr_2_ravenMaxDuration = null
    // keep track of which components have finished
    instr_2_ravenComponents = [];
    instr_2_ravenComponents.push(text_instr2_raven);
    instr_2_ravenComponents.push(key_resp_21);
    
    instr_2_ravenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function instr_2_ravenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_2_raven' ---
    // get current time
    t = instr_2_ravenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr2_raven* updates
    if (t >= 0.0 && text_instr2_raven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr2_raven.tStart = t;  // (not accounting for frame time here)
      text_instr2_raven.frameNStart = frameN;  // exact frame index
      
      text_instr2_raven.setAutoDraw(true);
    }
    
    
    // *key_resp_21* updates
    if (t >= 0.0 && key_resp_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_21.tStart = t;  // (not accounting for frame time here)
      key_resp_21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.clearEvents(); });
    }
    
    if (key_resp_21.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_21.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_21_allKeys = _key_resp_21_allKeys.concat(theseKeys);
      if (_key_resp_21_allKeys.length > 0) {
        key_resp_21.keys = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].name;  // just the last key pressed
        key_resp_21.rt = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].rt;
        key_resp_21.duration = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_2_ravenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_2_ravenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_2_raven' ---
    instr_2_ravenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_2_raven.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_21.corr, level);
    }
    psychoJS.experiment.addData('key_resp_21.keys', key_resp_21.keys);
    if (typeof key_resp_21.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_21.rt', key_resp_21.rt);
        psychoJS.experiment.addData('key_resp_21.duration', key_resp_21.duration);
        routineTimer.reset();
        }
    
    key_resp_21.stop();
    // the Routine "instr_2_raven" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function raven_2_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'raven_2_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    raven_2_instrClock.reset();
    routineTimer.reset();
    raven_2_instrMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('raven_2_instr.started', globalClock.getTime());
    raven_2_instrMaxDuration = 5
    // keep track of which components have finished
    raven_2_instrComponents = [];
    raven_2_instrComponents.push(image_2);
    
    raven_2_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function raven_2_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'raven_2_instr' ---
    // get current time
    t = raven_2_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > raven_2_instrMaxDuration) {
        raven_2_instrMaxDurationReached = true
        continueRoutine = false
    }
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    raven_2_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function raven_2_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'raven_2_instr' ---
    raven_2_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('raven_2_instr.stopped', globalClock.getTime());
    // the Routine "raven_2_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function raven_gradeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'raven_grade' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    raven_gradeClock.reset();
    routineTimer.reset();
    raven_gradeMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    psychoJS.window.mouseVisible = true;
    sliders = [slider_raven];
    for (var s, _pj_c = 0, _pj_a = sliders, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        s = _pj_a[_pj_c];
        s.reset();
    }
    _prev_pressed = false;
    function slider_hit(slider, mx, my) {
        /*
        Возвращает True, если точка (mx,my) находится в прямоугольнике слайдера.
        Работает для горизонтальных слайдеров.
        */
        var bottom, cx, cy, h, left, right, top, w;
        [cx, cy] = slider.pos;
        [w, h] = slider.size;
        [left, right] = [(cx - (w / 2.0)), (cx + (w / 2.0))];
        [bottom, top] = [(cy - (h / 2.0)), (cy + (h / 2.0))];
        return (((left <= mx) && (mx <= right)) && ((bottom <= my) && (my <= top)));
    }
    function value_from_mouse_x(slider, mx) {
        /*
        Преобразует X-позицию мыши в значение [0..100] по ширине слайдера.
        */
        var _, cx, frac, left, right, w;
        [cx, _] = slider.pos;
        [w, _] = slider.size;
        [left, right] = [(cx - (w / 2.0)), (cx + (w / 2.0))];
        if ((right === left)) {
            frac = 0.5;
        } else {
            frac = ((mx - left) / (right - left));
        }
        frac = Math.max(0.0, Math.min(1.0, frac));
        return util.round((frac * 100));
    }
    
    key_diff.keys = undefined;
    key_diff.rt = undefined;
    _key_diff_allKeys = [];
    slider_raven.reset()
    // setup some python lists for storing info about the mouse_raven
    // current position of the mouse:
    mouse_raven.x = [];
    mouse_raven.y = [];
    mouse_raven.leftButton = [];
    mouse_raven.midButton = [];
    mouse_raven.rightButton = [];
    mouse_raven.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('raven_grade.started', globalClock.getTime());
    raven_gradeMaxDuration = null
    // keep track of which components have finished
    raven_gradeComponents = [];
    raven_gradeComponents.push(key_diff);
    raven_gradeComponents.push(text_raven_grade);
    raven_gradeComponents.push(slider_raven);
    raven_gradeComponents.push(mouse_raven);
    raven_gradeComponents.push(text_100_raven);
    raven_gradeComponents.push(text_0_raven);
    
    raven_gradeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function raven_gradeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'raven_grade' ---
    // get current time
    t = raven_gradeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_7
    [mx, my] = mouse_raven.getPos();
    pressed = mouse_raven.getPressed()[0];
    if ((pressed && (! _prev_pressed))) {
        for (var s, _pj_c = 0, _pj_a = sliders, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            s = _pj_a[_pj_c];
            if (slider_hit(s, mx, my)) {
                val = value_from_mouse_x(s, mx);
                try {
                    s.setValue(val, {"log": false});
                } catch(e) {
                    s.markerPos = val;
                    s.rating = val;
                }
                break;
            }
        }
    }
    _prev_pressed = pressed;
    
    
    // *key_diff* updates
    if (t >= 0.0 && key_diff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_diff.tStart = t;  // (not accounting for frame time here)
      key_diff.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_diff.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_diff.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_diff.clearEvents(); });
    }
    
    if (key_diff.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_diff.getKeys({keyList: ['return'], waitRelease: false});
      _key_diff_allKeys = _key_diff_allKeys.concat(theseKeys);
      if (_key_diff_allKeys.length > 0) {
        key_diff.keys = _key_diff_allKeys[_key_diff_allKeys.length - 1].name;  // just the last key pressed
        key_diff.rt = _key_diff_allKeys[_key_diff_allKeys.length - 1].rt;
        key_diff.duration = _key_diff_allKeys[_key_diff_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_raven_grade* updates
    if (t >= 0.0 && text_raven_grade.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_raven_grade.tStart = t;  // (not accounting for frame time here)
      text_raven_grade.frameNStart = frameN;  // exact frame index
      
      text_raven_grade.setAutoDraw(true);
    }
    
    
    // *slider_raven* updates
    if (t >= 0.0 && slider_raven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_raven.tStart = t;  // (not accounting for frame time here)
      slider_raven.frameNStart = frameN;  // exact frame index
      
      slider_raven.setAutoDraw(true);
    }
    
    // *mouse_raven* updates
    if (t >= 0.0 && mouse_raven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_raven.tStart = t;  // (not accounting for frame time here)
      mouse_raven.frameNStart = frameN;  // exact frame index
      
      mouse_raven.status = PsychoJS.Status.STARTED;
      mouse_raven.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_raven.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_raven.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_raven.getPos();
          mouse_raven.x.push(_mouseXYs[0]);
          mouse_raven.y.push(_mouseXYs[1]);
          mouse_raven.leftButton.push(_mouseButtons[0]);
          mouse_raven.midButton.push(_mouseButtons[1]);
          mouse_raven.rightButton.push(_mouseButtons[2]);
          mouse_raven.time.push(mouse_raven.mouseClock.getTime());
        }
      }
    }
    
    // *text_100_raven* updates
    if (t >= 0.0 && text_100_raven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100_raven.tStart = t;  // (not accounting for frame time here)
      text_100_raven.frameNStart = frameN;  // exact frame index
      
      text_100_raven.setAutoDraw(true);
    }
    
    
    // *text_0_raven* updates
    if (t >= 0.0 && text_0_raven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_0_raven.tStart = t;  // (not accounting for frame time here)
      text_0_raven.frameNStart = frameN;  // exact frame index
      
      text_0_raven.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    raven_gradeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function raven_gradeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'raven_grade' ---
    raven_gradeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('raven_grade.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_diff.corr, level);
    }
    psychoJS.experiment.addData('key_diff.keys', key_diff.keys);
    if (typeof key_diff.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_diff.rt', key_diff.rt);
        psychoJS.experiment.addData('key_diff.duration', key_diff.duration);
        routineTimer.reset();
        }
    
    key_diff.stop();
    psychoJS.experiment.addData('slider_raven.response', slider_raven.getRating());
    psychoJS.experiment.addData('slider_raven.rt', slider_raven.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_raven.x', mouse_raven.x);
    psychoJS.experiment.addData('mouse_raven.y', mouse_raven.y);
    psychoJS.experiment.addData('mouse_raven.leftButton', mouse_raven.leftButton);
    psychoJS.experiment.addData('mouse_raven.midButton', mouse_raven.midButton);
    psychoJS.experiment.addData('mouse_raven.rightButton', mouse_raven.rightButton);
    psychoJS.experiment.addData('mouse_raven.time', mouse_raven.time);
    
    // the Routine "raven_grade" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function idiom_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'idiom_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    idiom_instrClock.reset();
    routineTimer.reset();
    idiom_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    idiom_instrMaxDuration = null
    // keep track of which components have finished
    idiom_instrComponents = [];
    idiom_instrComponents.push(text_12);
    idiom_instrComponents.push(key_resp_11);
    
    idiom_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function idiom_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'idiom_instr' ---
    // get current time
    t = idiom_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    idiom_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function idiom_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'idiom_instr' ---
    idiom_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_11.stop();
    // the Routine "idiom_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function idiom_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'idiom_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    idiom_testClock.reset();
    routineTimer.reset();
    idiom_testMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_31.keys = undefined;
    key_resp_31.rt = undefined;
    _key_resp_31_allKeys = [];
    idiom_testMaxDuration = 3
    // keep track of which components have finished
    idiom_testComponents = [];
    idiom_testComponents.push(image_4);
    idiom_testComponents.push(key_resp_31);
    
    idiom_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function idiom_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'idiom_test' ---
    // get current time
    t = idiom_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > idiom_testMaxDuration) {
        idiom_testMaxDurationReached = true
        continueRoutine = false
    }
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    
    // *key_resp_31* updates
    if (t >= 0.0 && key_resp_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_31.tStart = t;  // (not accounting for frame time here)
      key_resp_31.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_31.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_31.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_31.clearEvents(); });
    }
    
    if (key_resp_31.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_31.getKeys({keyList: ['y', 'n', 'left', 'right', 'retirn'], waitRelease: false});
      _key_resp_31_allKeys = _key_resp_31_allKeys.concat(theseKeys);
      if (_key_resp_31_allKeys.length > 0) {
        key_resp_31.keys = _key_resp_31_allKeys[_key_resp_31_allKeys.length - 1].name;  // just the last key pressed
        key_resp_31.rt = _key_resp_31_allKeys[_key_resp_31_allKeys.length - 1].rt;
        key_resp_31.duration = _key_resp_31_allKeys[_key_resp_31_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    idiom_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function idiom_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'idiom_test' ---
    idiom_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_31.corr, level);
    }
    psychoJS.experiment.addData('key_resp_31.keys', key_resp_31.keys);
    if (typeof key_resp_31.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_31.rt', key_resp_31.rt);
        psychoJS.experiment.addData('key_resp_31.duration', key_resp_31.duration);
        routineTimer.reset();
        }
    
    key_resp_31.stop();
    // the Routine "idiom_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function idioms_answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'idioms_answer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    idioms_answerClock.reset();
    routineTimer.reset();
    idioms_answerMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_36.keys = undefined;
    key_resp_36.rt = undefined;
    _key_resp_36_allKeys = [];
    idioms_answerMaxDuration = null
    // keep track of which components have finished
    idioms_answerComponents = [];
    idioms_answerComponents.push(text_13);
    idioms_answerComponents.push(image_44);
    idioms_answerComponents.push(text_31);
    idioms_answerComponents.push(key_resp_36);
    
    idioms_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function idioms_answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'idioms_answer' ---
    // get current time
    t = idioms_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    
    // *image_44* updates
    if (t >= 0.0 && image_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_44.tStart = t;  // (not accounting for frame time here)
      image_44.frameNStart = frameN;  // exact frame index
      
      image_44.setAutoDraw(true);
    }
    
    
    // *text_31* updates
    if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }
    
    
    // *key_resp_36* updates
    if (t >= 0.0 && key_resp_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_36.tStart = t;  // (not accounting for frame time here)
      key_resp_36.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_36.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_36.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_36.clearEvents(); });
    }
    
    if (key_resp_36.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_36.getKeys({keyList: ['y', 'n', 'left', '2', '1'], waitRelease: false});
      _key_resp_36_allKeys = _key_resp_36_allKeys.concat(theseKeys);
      if (_key_resp_36_allKeys.length > 0) {
        key_resp_36.keys = _key_resp_36_allKeys[_key_resp_36_allKeys.length - 1].name;  // just the last key pressed
        key_resp_36.rt = _key_resp_36_allKeys[_key_resp_36_allKeys.length - 1].rt;
        key_resp_36.duration = _key_resp_36_allKeys[_key_resp_36_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    idioms_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function idioms_answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'idioms_answer' ---
    idioms_answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_36.corr, level);
    }
    psychoJS.experiment.addData('key_resp_36.keys', key_resp_36.keys);
    if (typeof key_resp_36.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_36.rt', key_resp_36.rt);
        psychoJS.experiment.addData('key_resp_36.duration', key_resp_36.duration);
        routineTimer.reset();
        }
    
    key_resp_36.stop();
    // the Routine "idioms_answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function grade_idioms_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'grade_idioms_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    grade_idioms_testClock.reset();
    routineTimer.reset();
    grade_idioms_testMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    psychoJS.window.mouseVisible = true;
    sliders = [slider_orig_test];
    for (var s, _pj_c = 0, _pj_a = sliders, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        s = _pj_a[_pj_c];
        s.reset();
    }
    _prev_pressed = false;
    function slider_hit(slider, mx, my) {
        /*
        Возвращает True, если точка (mx,my) находится в прямоугольнике слайдера.
        Работает для горизонтальных слайдеров.
        */
        var bottom, cx, cy, h, left, right, top, w;
        [cx, cy] = slider.pos;
        [w, h] = slider.size;
        [left, right] = [(cx - (w / 2.0)), (cx + (w / 2.0))];
        [bottom, top] = [(cy - (h / 2.0)), (cy + (h / 2.0))];
        return (((left <= mx) && (mx <= right)) && ((bottom <= my) && (my <= top)));
    }
    function value_from_mouse_x(slider, mx) {
        /*
        Преобразует X-позицию мыши в значение [0..100] по ширине слайдера.
        */
        var _, cx, frac, left, right, w;
        [cx, _] = slider.pos;
        [w, _] = slider.size;
        [left, right] = [(cx - (w / 2.0)), (cx + (w / 2.0))];
        if ((right === left)) {
            frac = 0.5;
        } else {
            frac = ((mx - left) / (right - left));
        }
        frac = Math.max(0.0, Math.min(1.0, frac));
        return util.round((frac * 100));
    }
    
    key_resp_30.keys = undefined;
    key_resp_30.rt = undefined;
    _key_resp_30_allKeys = [];
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    gotValidClick = false; // until a click is received
    slider_orig_test.reset()
    psychoJS.experiment.addData('grade_idioms_test.started', globalClock.getTime());
    grade_idioms_testMaxDuration = null
    // keep track of which components have finished
    grade_idioms_testComponents = [];
    grade_idioms_testComponents.push(key_resp_30);
    grade_idioms_testComponents.push(mouse_2);
    grade_idioms_testComponents.push(slider_orig_test);
    grade_idioms_testComponents.push(text_orig_test);
    grade_idioms_testComponents.push(text_0_orig_test);
    grade_idioms_testComponents.push(text_100_orig_test_2);
    
    grade_idioms_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function grade_idioms_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'grade_idioms_test' ---
    // get current time
    t = grade_idioms_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_2
    [mx, my] = mouse_2.getPos();
    pressed = mouse_2.getPressed()[0];
    if ((pressed && (! _prev_pressed))) {
        for (var s, _pj_c = 0, _pj_a = sliders, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            s = _pj_a[_pj_c];
            if (slider_hit(s, mx, my)) {
                val = value_from_mouse_x(s, mx);
                try {
                    s.setValue(val, {"log": false});
                } catch(e) {
                    s.markerPos = val;
                    s.rating = val;
                }
                break;
            }
        }
    }
    _prev_pressed = pressed;
    
    
    // *key_resp_30* updates
    if (t >= 0.0 && key_resp_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_30.tStart = t;  // (not accounting for frame time here)
      key_resp_30.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_30.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_30.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_30.clearEvents(); });
    }
    
    if (key_resp_30.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_30.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_30_allKeys = _key_resp_30_allKeys.concat(theseKeys);
      if (_key_resp_30_allKeys.length > 0) {
        key_resp_30.keys = _key_resp_30_allKeys[_key_resp_30_allKeys.length - 1].name;  // just the last key pressed
        key_resp_30.rt = _key_resp_30_allKeys[_key_resp_30_allKeys.length - 1].rt;
        key_resp_30.duration = _key_resp_30_allKeys[_key_resp_30_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
        }
      }
    }
    
    // *slider_orig_test* updates
    if (t >= 0.0 && slider_orig_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_orig_test.tStart = t;  // (not accounting for frame time here)
      slider_orig_test.frameNStart = frameN;  // exact frame index
      
      slider_orig_test.setAutoDraw(true);
    }
    
    
    // *text_orig_test* updates
    if (t >= 0.0 && text_orig_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_orig_test.tStart = t;  // (not accounting for frame time here)
      text_orig_test.frameNStart = frameN;  // exact frame index
      
      text_orig_test.setAutoDraw(true);
    }
    
    
    // *text_0_orig_test* updates
    if (t >= 0.0 && text_0_orig_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_0_orig_test.tStart = t;  // (not accounting for frame time here)
      text_0_orig_test.frameNStart = frameN;  // exact frame index
      
      text_0_orig_test.setAutoDraw(true);
    }
    
    
    // *text_100_orig_test_2* updates
    if (t >= 0.0 && text_100_orig_test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100_orig_test_2.tStart = t;  // (not accounting for frame time here)
      text_100_orig_test_2.frameNStart = frameN;  // exact frame index
      
      text_100_orig_test_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    grade_idioms_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function grade_idioms_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'grade_idioms_test' ---
    grade_idioms_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('grade_idioms_test.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_30.corr, level);
    }
    psychoJS.experiment.addData('key_resp_30.keys', key_resp_30.keys);
    if (typeof key_resp_30.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_30.rt', key_resp_30.rt);
        psychoJS.experiment.addData('key_resp_30.duration', key_resp_30.duration);
        routineTimer.reset();
        }
    
    key_resp_30.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    
    psychoJS.experiment.addData('slider_orig_test.response', slider_orig_test.getRating());
    psychoJS.experiment.addData('slider_orig_test.rt', slider_orig_test.getRT());
    // the Routine "grade_idioms_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function raven_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'raven_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    raven_1Clock.reset();
    routineTimer.reset();
    raven_1MaxDurationReached = false;
    // update component parameters for each repeat
    image_raven_1_test.setImage(raven_task_path);
    psychoJS.experiment.addData('raven_1.started', globalClock.getTime());
    raven_1MaxDuration = 2
    // keep track of which components have finished
    raven_1Components = [];
    raven_1Components.push(image_raven_1_test);
    
    raven_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function raven_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'raven_1' ---
    // get current time
    t = raven_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > raven_1MaxDuration) {
        raven_1MaxDurationReached = true
        continueRoutine = false
    }
    
    // *image_raven_1_test* updates
    if (t >= 0.0 && image_raven_1_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_raven_1_test.tStart = t;  // (not accounting for frame time here)
      image_raven_1_test.frameNStart = frameN;  // exact frame index
      
      image_raven_1_test.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    raven_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function raven_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'raven_1' ---
    raven_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('raven_1.stopped', globalClock.getTime());
    // the Routine "raven_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function idioms_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'idioms_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    idioms_taskClock.reset();
    routineTimer.reset();
    idioms_taskMaxDurationReached = false;
    // update component parameters for each repeat
    idioma.setImage(idioma_pic_path);
    key_idioma_task.keys = undefined;
    key_idioma_task.rt = undefined;
    _key_idioma_task_allKeys = [];
    psychoJS.experiment.addData('idioms_task.started', globalClock.getTime());
    idioms_taskMaxDuration = 5
    // keep track of which components have finished
    idioms_taskComponents = [];
    idioms_taskComponents.push(idioma);
    idioms_taskComponents.push(key_idioma_task);
    
    idioms_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function idioms_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'idioms_task' ---
    // get current time
    t = idioms_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > idioms_taskMaxDuration) {
        idioms_taskMaxDurationReached = true
        continueRoutine = false
    }
    
    // *idioma* updates
    if (t >= 0.0 && idioma.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      idioma.tStart = t;  // (not accounting for frame time here)
      idioma.frameNStart = frameN;  // exact frame index
      
      idioma.setAutoDraw(true);
    }
    
    
    // *key_idioma_task* updates
    if (t >= 0.0 && key_idioma_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_idioma_task.tStart = t;  // (not accounting for frame time here)
      key_idioma_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_idioma_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_idioma_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_idioma_task.clearEvents(); });
    }
    
    if (key_idioma_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_idioma_task.getKeys({keyList: ['return'], waitRelease: false});
      _key_idioma_task_allKeys = _key_idioma_task_allKeys.concat(theseKeys);
      if (_key_idioma_task_allKeys.length > 0) {
        key_idioma_task.keys = _key_idioma_task_allKeys[_key_idioma_task_allKeys.length - 1].name;  // just the last key pressed
        key_idioma_task.rt = _key_idioma_task_allKeys[_key_idioma_task_allKeys.length - 1].rt;
        key_idioma_task.duration = _key_idioma_task_allKeys[_key_idioma_task_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    idioms_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function idioms_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'idioms_task' ---
    idioms_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('idioms_task.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_idioma_task.corr, level);
    }
    psychoJS.experiment.addData('key_idioma_task.keys', key_idioma_task.keys);
    if (typeof key_idioma_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_idioma_task.rt', key_idioma_task.rt);
        psychoJS.experiment.addData('key_idioma_task.duration', key_idioma_task.duration);
        routineTimer.reset();
        }
    
    key_idioma_task.stop();
    // the Routine "idioms_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function idioms_right_answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'idioms_right_answer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    idioms_right_answerClock.reset();
    routineTimer.reset();
    idioms_right_answerMaxDurationReached = false;
    // update component parameters for each repeat
    text_right_idiom.setText(idioma_answer_path);
    image_right_idiom.setImage(idioma_pic_path);
    key_resp_20.keys = undefined;
    key_resp_20.rt = undefined;
    _key_resp_20_allKeys = [];
    key_resp_37.keys = undefined;
    key_resp_37.rt = undefined;
    _key_resp_37_allKeys = [];
    psychoJS.experiment.addData('idioms_right_answer.started', globalClock.getTime());
    idioms_right_answerMaxDuration = null
    // keep track of which components have finished
    idioms_right_answerComponents = [];
    idioms_right_answerComponents.push(text_right_idiom);
    idioms_right_answerComponents.push(image_right_idiom);
    idioms_right_answerComponents.push(key_resp_20);
    idioms_right_answerComponents.push(text_insight_idioms_2);
    idioms_right_answerComponents.push(key_resp_37);
    
    idioms_right_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function idioms_right_answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'idioms_right_answer' ---
    // get current time
    t = idioms_right_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_right_idiom* updates
    if (t >= 0.0 && text_right_idiom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_right_idiom.tStart = t;  // (not accounting for frame time here)
      text_right_idiom.frameNStart = frameN;  // exact frame index
      
      text_right_idiom.setAutoDraw(true);
    }
    
    
    // *image_right_idiom* updates
    if (t >= 0.0 && image_right_idiom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_right_idiom.tStart = t;  // (not accounting for frame time here)
      image_right_idiom.frameNStart = frameN;  // exact frame index
      
      image_right_idiom.setAutoDraw(true);
    }
    
    
    // *key_resp_20* updates
    if (t >= 0.0 && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_20.tStart = t;  // (not accounting for frame time here)
      key_resp_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.clearEvents(); });
    }
    
    if (key_resp_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_20.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_20_allKeys = _key_resp_20_allKeys.concat(theseKeys);
      if (_key_resp_20_allKeys.length > 0) {
        key_resp_20.keys = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].name;  // just the last key pressed
        key_resp_20.rt = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].rt;
        key_resp_20.duration = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_insight_idioms_2* updates
    if (t >= 0.0 && text_insight_idioms_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_insight_idioms_2.tStart = t;  // (not accounting for frame time here)
      text_insight_idioms_2.frameNStart = frameN;  // exact frame index
      
      text_insight_idioms_2.setAutoDraw(true);
    }
    
    
    // *key_resp_37* updates
    if (t >= 0.0 && key_resp_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_37.tStart = t;  // (not accounting for frame time here)
      key_resp_37.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_37.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_37.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_37.clearEvents(); });
    }
    
    if (key_resp_37.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_37.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_37_allKeys = _key_resp_37_allKeys.concat(theseKeys);
      if (_key_resp_37_allKeys.length > 0) {
        key_resp_37.keys = _key_resp_37_allKeys[_key_resp_37_allKeys.length - 1].name;  // just the last key pressed
        key_resp_37.rt = _key_resp_37_allKeys[_key_resp_37_allKeys.length - 1].rt;
        key_resp_37.duration = _key_resp_37_allKeys[_key_resp_37_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    idioms_right_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function idioms_right_answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'idioms_right_answer' ---
    idioms_right_answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('idioms_right_answer.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_20.corr, level);
    }
    psychoJS.experiment.addData('key_resp_20.keys', key_resp_20.keys);
    if (typeof key_resp_20.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_20.rt', key_resp_20.rt);
        psychoJS.experiment.addData('key_resp_20.duration', key_resp_20.duration);
        routineTimer.reset();
        }
    
    key_resp_20.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_37.corr, level);
    }
    psychoJS.experiment.addData('key_resp_37.keys', key_resp_37.keys);
    if (typeof key_resp_37.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_37.rt', key_resp_37.rt);
        psychoJS.experiment.addData('key_resp_37.duration', key_resp_37.duration);
        routineTimer.reset();
        }
    
    key_resp_37.stop();
    // the Routine "idioms_right_answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ahaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'aha' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ahaClock.reset();
    routineTimer.reset();
    ahaMaxDurationReached = false;
    // update component parameters for each repeat
    key_aha_idioms.keys = undefined;
    key_aha_idioms.rt = undefined;
    _key_aha_idioms_allKeys = [];
    psychoJS.experiment.addData('aha.started', globalClock.getTime());
    ahaMaxDuration = null
    // keep track of which components have finished
    ahaComponents = [];
    ahaComponents.push(text_aha_idioms);
    ahaComponents.push(key_aha_idioms);
    
    ahaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function ahaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'aha' ---
    // get current time
    t = ahaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_aha_idioms* updates
    if (t >= 0.0 && text_aha_idioms.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_aha_idioms.tStart = t;  // (not accounting for frame time here)
      text_aha_idioms.frameNStart = frameN;  // exact frame index
      
      text_aha_idioms.setAutoDraw(true);
    }
    
    
    // *key_aha_idioms* updates
    if (t >= 0.0 && key_aha_idioms.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_aha_idioms.tStart = t;  // (not accounting for frame time here)
      key_aha_idioms.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_aha_idioms.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_aha_idioms.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_aha_idioms.clearEvents(); });
    }
    
    if (key_aha_idioms.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_aha_idioms.getKeys({keyList: ['0', '1', '2', '3', '4', '5'], waitRelease: false});
      _key_aha_idioms_allKeys = _key_aha_idioms_allKeys.concat(theseKeys);
      if (_key_aha_idioms_allKeys.length > 0) {
        key_aha_idioms.keys = _key_aha_idioms_allKeys[_key_aha_idioms_allKeys.length - 1].name;  // just the last key pressed
        key_aha_idioms.rt = _key_aha_idioms_allKeys[_key_aha_idioms_allKeys.length - 1].rt;
        key_aha_idioms.duration = _key_aha_idioms_allKeys[_key_aha_idioms_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ahaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ahaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'aha' ---
    ahaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('aha.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_aha_idioms.corr, level);
    }
    psychoJS.experiment.addData('key_aha_idioms.keys', key_aha_idioms.keys);
    if (typeof key_aha_idioms.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_aha_idioms.rt', key_aha_idioms.rt);
        psychoJS.experiment.addData('key_aha_idioms.duration', key_aha_idioms.duration);
        routineTimer.reset();
        }
    
    key_aha_idioms.stop();
    // the Routine "aha" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function grade_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'grade_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    grade_testClock.reset();
    routineTimer.reset();
    grade_testMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    psychoJS.window.mouseVisible = true;
    sliders = [slider_originality_test];
    for (var s, _pj_c = 0, _pj_a = sliders, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        s = _pj_a[_pj_c];
        s.reset();
    }
    _prev_pressed = false;
    function slider_hit(slider, mx, my) {
        /*
        Возвращает True, если точка (mx,my) находится в прямоугольнике слайдера.
        Работает для горизонтальных слайдеров.
        */
        var bottom, cx, cy, h, left, right, top, w;
        [cx, cy] = slider.pos;
        [w, h] = slider.size;
        [left, right] = [(cx - (w / 2.0)), (cx + (w / 2.0))];
        [bottom, top] = [(cy - (h / 2.0)), (cy + (h / 2.0))];
        return (((left <= mx) && (mx <= right)) && ((bottom <= my) && (my <= top)));
    }
    function value_from_mouse_x(slider, mx) {
        /*
        Преобразует X-позицию мыши в значение [0..100] по ширине слайдера.
        */
        var _, cx, frac, left, right, w;
        [cx, _] = slider.pos;
        [w, _] = slider.size;
        [left, right] = [(cx - (w / 2.0)), (cx + (w / 2.0))];
        if ((right === left)) {
            frac = 0.5;
        } else {
            frac = ((mx - left) / (right - left));
        }
        frac = Math.max(0.0, Math.min(1.0, frac));
        return util.round((frac * 100));
    }
    
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    slider_originality_test.reset()
    psychoJS.experiment.addData('grade_test.started', globalClock.getTime());
    grade_testMaxDuration = null
    // keep track of which components have finished
    grade_testComponents = [];
    grade_testComponents.push(key_resp_14);
    grade_testComponents.push(mouse);
    grade_testComponents.push(slider_originality_test);
    grade_testComponents.push(text_originality_test);
    grade_testComponents.push(text_0_originality_test);
    grade_testComponents.push(text_100_originality_test);
    
    grade_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function grade_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'grade_test' ---
    // get current time
    t = grade_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    [mx, my] = mouse.getPos();
    pressed = mouse.getPressed()[0];
    if ((pressed && (! _prev_pressed))) {
        for (var s, _pj_c = 0, _pj_a = sliders, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            s = _pj_a[_pj_c];
            if (slider_hit(s, mx, my)) {
                val = value_from_mouse_x(s, mx);
                try {
                    s.setValue(val, {"log": false});
                } catch(e) {
                    s.markerPos = val;
                    s.rating = val;
                }
                break;
            }
        }
    }
    _prev_pressed = pressed;
    
    
    // *key_resp_14* updates
    if (t >= 0.0 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }
    
    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        key_resp_14.duration = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    
    // *slider_originality_test* updates
    if (t >= 0.0 && slider_originality_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_originality_test.tStart = t;  // (not accounting for frame time here)
      slider_originality_test.frameNStart = frameN;  // exact frame index
      
      slider_originality_test.setAutoDraw(true);
    }
    
    
    // *text_originality_test* updates
    if (t >= 0.0 && text_originality_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_originality_test.tStart = t;  // (not accounting for frame time here)
      text_originality_test.frameNStart = frameN;  // exact frame index
      
      text_originality_test.setAutoDraw(true);
    }
    
    
    // *text_0_originality_test* updates
    if (t >= 0.0 && text_0_originality_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_0_originality_test.tStart = t;  // (not accounting for frame time here)
      text_0_originality_test.frameNStart = frameN;  // exact frame index
      
      text_0_originality_test.setAutoDraw(true);
    }
    
    
    // *text_100_originality_test* updates
    if (t >= 0.0 && text_100_originality_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100_originality_test.tStart = t;  // (not accounting for frame time here)
      text_100_originality_test.frameNStart = frameN;  // exact frame index
      
      text_100_originality_test.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    grade_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function grade_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'grade_test' ---
    grade_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('grade_test.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_14.corr, level);
    }
    psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
    if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
        psychoJS.experiment.addData('key_resp_14.duration', key_resp_14.duration);
        routineTimer.reset();
        }
    
    key_resp_14.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    psychoJS.experiment.addData('slider_originality_test.response', slider_originality_test.getRating());
    psychoJS.experiment.addData('slider_originality_test.rt', slider_originality_test.getRT());
    // the Routine "grade_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function break_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'break_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    break_1Clock.reset();
    routineTimer.reset();
    break_1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    curr = (pairs.thisN + 1);
    total = n_pairs;
    progress_str = `Повтор ${curr} из ${total}`;
    
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    progress_lbl.setText(progress_str);
    psychoJS.experiment.addData('break_1.started', globalClock.getTime());
    break_1MaxDuration = null
    // keep track of which components have finished
    break_1Components = [];
    break_1Components.push(text_32);
    break_1Components.push(key_resp_9);
    break_1Components.push(progress_lbl);
    
    break_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function break_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'break_1' ---
    // get current time
    t = break_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['y', 'n', 'left', 'right', 'return'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *progress_lbl* updates
    if (t >= 0.0 && progress_lbl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_lbl.tStart = t;  // (not accounting for frame time here)
      progress_lbl.frameNStart = frameN;  // exact frame index
      
      progress_lbl.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function break_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'break_1' ---
    break_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('break_1.stopped', globalClock.getTime());
    key_resp_9.stop();
    // the Routine "break_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function GoodbyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodby' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GoodbyClock.reset();
    routineTimer.reset();
    GoodbyMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    console.log("ENTER text routine");
    
    GoodbyMaxDuration = 10
    // keep track of which components have finished
    GoodbyComponents = [];
    GoodbyComponents.push(text_15);
    
    GoodbyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function GoodbyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodby' ---
    // get current time
    t = GoodbyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > GoodbyMaxDuration) {
        GoodbyMaxDurationReached = true
        continueRoutine = false
    }
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GoodbyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function GoodbyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodby' ---
    GoodbyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Goodby" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
