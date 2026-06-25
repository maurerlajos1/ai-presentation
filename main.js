const CHAPTERS = [
  { title: "Chapter 1 — Introduction", sub: "The Intelligence Revolution",                dur: 40 },
  { title: "Chapter 2 — Late 2024",    sub: "The Calm Before the Storm",              dur: 55 },
  { title: "Chapter 3 — DeepSeek",     sub: "The Open-Source Shockwave",              dur: 68 },
  { title: "Chapter 4 — The Leap",     sub: "Test-Time Compute",                      dur: 65 },
  { title: "Chapter 5 — Aug 2025",     sub: "GPT-5 — A New Ceiling",                  dur: 70 },
  { title: "Chapter 6 — Senses",       sub: "AI Grew New Senses",                     dur: 66 },
  { title: "Chapter 7 — Agents",       sub: "AI Stopped Chatting. It Started Doing.", dur: 80 },
  { title: "Chapter 8 — Model Wars",   sub: "The Great Competition of 2025",          dur: 72 },
  { title: "Chapter 9 — 2026",         sub: "The Year AI Went to Work",               dur: 70 },
  { title: "Chapter 10 — Impact",      sub: "AI in the Real World",                   dur: 74 },
  { title: "Chapter 11 — Numbers",     sub: "The Scale of the Revolution",            dur: 60 },
  { title: "Chapter 12 — Gemini 4",    sub: "The Next Paradigm",                      dur: 65 },
  { title: "Chapter 13 — Omniscient",  sub: "The Multimodal Singularity",             dur: 60 },
  { title: "Chapter 14 — Horizon",     sub: "Approaching AGI",                        dur: 70 },
  { title: "Chapter 15 — Conclusion",  sub: "What We Choose to Build",                dur: 58 },
];


// --- ARRAYS REBUILT ---

// --- PROFESSIONAL CONTEXT MAPPING ---
// Map the 22 existing AI images directly to the topics of the 15 slides







// --- YOUTUBE MONTAGE ENGINE ---

// --- PROFESSIONAL TIMED SCRIPT MAPPING ---
// These timestamps perfectly map the visual cut to the exact sentence the narrator is speaking

// --- VIRTUAL CAMERA ENGINE ---
// Maps visual cut to exact sentences, WITH dynamic CSS camera pans
const TIMED_MONTAGE_MAP = {
    // Chap 1: Intro
    // 0s: "Welcome..." | 4s: "In just two years" | 8s: "This is the story"
    0: [{ time: 0.0, image: 'broll/cutscene_intro_1780712803821.png', zoom: '150%', x: '10%', y: '10%' },
        { time: 4.0, image: 'broll/ai_brain_hero_1780709853443.png', zoom: '200%', x: '50%', y: '50%' },
        { time: 8.0, image: 'broll/ai_brain_hero_1780709853443.png', zoom: '100%', x: '50%', y: '50%' },
        { time: 14.0, image: 'broll/cutscene_intro_1780712803821.png', zoom: '100%', x: '50%', y: '50%' }],
        
    // Chap 2: Late 2024
    1: [{ time: 0.0, image: 'broll/cutscene_wallstreet_1780712844723.png', zoom: '120%', x: '0%', y: '0%' },
        { time: 6.0, image: 'broll/cutscene_wallstreet_1780712844723.png', zoom: '150%', x: '80%', y: '20%' },
        { time: 12.0, image: 'broll/cutscene_wallstreet_1780712844723.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 3: DeepSeek
    // 0s: "On Jan 20th..." | 5s: "Matched GPT4" | 10s: "Nvidia lost..."
    2: [{ time: 0.0, image: 'broll/cutscene_deepseek_1780712822597.png', zoom: '150%', x: '10%', y: '90%' },
        { time: 5.0, image: 'broll/cutscene_deepseek_1780712822597.png', zoom: '100%', x: '50%', y: '50%' },
        { time: 10.0, image: 'broll/deepseek_shockwave_1780709864688.png', zoom: '200%', x: '50%', y: '50%' },
        { time: 16.0, image: 'broll/deepseek_shockwave_1780709864688.png', zoom: '100%', x: '50%', y: '50%' }],
        
    // Chap 4: The Leap
    3: [{ time: 0.0, image: 'broll/cutscene_reasoning_1780712832910.png', zoom: '150%', x: '20%', y: '20%' },
        { time: 4.0, image: 'broll/cutscene_reasoning_1780712832910.png', zoom: '100%', x: '50%', y: '50%' },
        { time: 11.0, image: 'broll/ai_thinking_1780709877547.png', zoom: '200%', x: '50%', y: '20%' },
        { time: 18.0, image: 'broll/ai_thinking_1780709877547.png', zoom: '100%', x: '50%', y: '50%' }],
        
    // Chap 5: GPT-5
    4: [{ time: 0.0, image: 'broll/gpt5_launch_1780709895738.png', zoom: '180%', x: '0%', y: '0%' },
        { time: 6.0, image: 'broll/gpt5_launch_1780709895738.png', zoom: '140%', x: '50%', y: '80%' },
        { time: 12.0, image: 'broll/gpt5_launch_1780709895738.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 6: Senses
    5: [{ time: 0.0, image: 'broll/ai_multimodal_1780709905442.png', zoom: '150%', x: '10%', y: '50%' },
        { time: 7.0, image: 'broll/ai_multimodal_1780709905442.png', zoom: '200%', x: '80%', y: '20%' },
        { time: 14.0, image: 'broll/ai_multimodal_1780709905442.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 7: Agents
    6: [{ time: 0.0, image: 'broll/ai_agents_swarm_1780709915298.png', zoom: '180%', x: '20%', y: '20%' },
        { time: 8.0, image: 'broll/ai_agents_swarm_1780709915298.png', zoom: '130%', x: '80%', y: '80%' },
        { time: 16.0, image: 'broll/ai_agents_swarm_1780709915298.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 8: Model Wars
    7: [{ time: 0.0, image: 'broll/cutscene_modelwars_1780712878426.png', zoom: '200%', x: '50%', y: '10%' },
        { time: 6.0, image: 'broll/cutscene_modelwars_1780712878426.png', zoom: '140%', x: '10%', y: '90%' },
        { time: 14.0, image: 'broll/cutscene_modelwars_1780712878426.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 9: 2026
    8: [{ time: 0.0, image: 'broll/cutscene_future_city_1780712867134.png', zoom: '160%', x: '80%', y: '20%' },
        { time: 7.0, image: 'broll/cutscene_future_city_1780712867134.png', zoom: '200%', x: '20%', y: '80%' },
        { time: 15.0, image: 'broll/cutscene_future_city_1780712867134.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 10: Impact
    9: [{ time: 0.0, image: 'broll/cutscene_humanai_1780712856997.png', zoom: '150%', x: '10%', y: '50%' },
        { time: 5.0, image: 'broll/cutscene_humanai_1780712856997.png', zoom: '100%', x: '50%', y: '50%' },
        { time: 10.0, image: 'broll/ai_real_world_1780709931527.png', zoom: '200%', x: '50%', y: '20%' },
        { time: 18.0, image: 'broll/ai_real_world_1780709931527.png', zoom: '100%', x: '50%', y: '50%' }],
        
    // Chap 11: Numbers
    10: [{ time: 0.0, image: 'broll/cutscene_datacenter_1780712811758.png', zoom: '180%', x: '10%', y: '10%' },
         { time: 6.0, image: 'broll/cutscene_datacenter_1780712811758.png', zoom: '130%', x: '90%', y: '90%' },
         { time: 14.0, image: 'broll/cutscene_datacenter_1780712811758.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 12: Gemini 4
    11: [{ time: 0.0, image: 'broll/cs_gemini4_arch_1780717290901.png', zoom: '200%', x: '50%', y: '50%' },
         { time: 7.0, image: 'broll/cs_gemini4_arch_1780717290901.png', zoom: '150%', x: '20%', y: '20%' },
         { time: 15.0, image: 'broll/cs_gemini4_arch_1780717290901.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 13: Omniscient
    12: [{ time: 0.0, image: 'broll/ai_multimodal_1780709905442.png', zoom: '160%', x: '80%', y: '80%' },
         { time: 7.0, image: 'broll/ai_multimodal_1780709905442.png', zoom: '220%', x: '10%', y: '10%' },
         { time: 14.0, image: 'broll/ai_multimodal_1780709905442.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 14: Horizon
    13: [{ time: 0.0, image: 'broll/ai_future_1780709942301.png', zoom: '150%', x: '10%', y: '90%' },
         { time: 8.0, image: 'broll/ai_future_1780709942301.png', zoom: '180%', x: '90%', y: '10%' },
         { time: 16.0, image: 'broll/ai_future_1780709942301.png', zoom: '100%', x: '50%', y: '50%' }],
    
    // Chap 15: Conclusion
    14: [{ time: 0.0, image: 'broll/ai_future_1780709942301.png', zoom: '200%', x: '50%', y: '50%' },
         { time: 6.0, image: 'broll/ai_future_1780709942301.png', zoom: '150%', x: '20%', y: '80%' },
         { time: 14.0, image: 'broll/ai_future_1780709942301.png', zoom: '100%', x: '50%', y: '50%' }]
};

let montageAnimationFrame = null;
let currentMontageImage = null;
let montageInterval = null;

function startMontage(intervalMs, targetElementId, isCutscene) {
    // We completely replace interval-based random montages with TIMED precise montages
    if (montageAnimationFrame) cancelAnimationFrame(montageAnimationFrame);
    if (montageInterval) clearInterval(montageInterval); // Clear old legacy intervals
    
    let target = document.getElementById(targetElementId);
    if (targetElementId === 'cutscene') target = target.querySelector('.kb-img') || target;
    if (!target) return;
    
    // Inject two background layers if not exists for crossfading
    if (!target.querySelector('.bg-layer-1')) {
        target.innerHTML += '<div class="bg-layer-1" style="position:absolute;inset:0;background-size:cover;background-position:center;transition:opacity 0.6s ease-in-out;z-index:0;"></div>';
        target.innerHTML += '<div class="bg-layer-2" style="position:absolute;inset:0;background-size:cover;background-position:center;transition:opacity 0.6s ease-in-out;z-index:0;opacity:0;"></div>';
    }
    
    const l1 = target.querySelector('.bg-layer-1');
    const l2 = target.querySelector('.bg-layer-2');
    
    // Ensure content stays on top
    Array.from(target.children).forEach(c => {
        if (!c.classList.contains('bg-layer-1') && !c.classList.contains('bg-layer-2')) {
            c.style.position = 'relative';
            c.style.zIndex = '10';
        }
    });

    let activeLayer = 1;
    const timeline = TIMED_MONTAGE_MAP[state.cur] || [{time:0.0, image: 'img_' + state.cur + '.png'}];
    
    // Set initial image (time 0)
    const t0 = timeline[0];
    currentMontageImage = t0.image + "_" + (t0.zoom||"100%") + "_" + (t0.x||"50%");
    
    l1.style.backgroundImage = `url('${t0.image}')`;
    l1.style.backgroundSize = t0.zoom || '100%';
    l1.style.backgroundPosition = `${t0.x || '50%'} ${t0.y || '50%'}`;
    
    l2.style.backgroundImage = `url('${t0.image}')`;
    l2.style.backgroundSize = t0.zoom || '100%';
    l2.style.backgroundPosition = `${t0.x || '50%'} ${t0.y || '50%'}`;
    l1.style.opacity = 1;
    l2.style.opacity = 0;
    if(typeof updateImageLabel === 'function') updateImageLabel(currentMontageImage);
    
    function updateTimedMontage() {
        if (state.isPlaying && !isCutscene && voiceAudio) {
            const currentTime = voiceAudio.currentTime;
            let targetImage = timeline[0].image;
            
            // Find the image for the current timestamp
            for (let i = 0; i < timeline.length; i++) {
                if (currentTime >= timeline[i].time) {
                    targetImage = timeline[i].image;
                }
            }
            
            // We now track the entire object, not just the image path, to trigger Virtual Camera cuts
            let targetObj = timeline[0];
            for (let i = 0; i < timeline.length; i++) {
                if (currentTime >= timeline[i].time) {
                    targetObj = timeline[i];
                }
            }
            
            // Generate a unique ID for the shot to trigger crossfades even on the same image
            const shotId = targetObj.image + "_" + (targetObj.zoom || "100%") + "_" + (targetObj.x || "50%");
            
            if (shotId !== currentMontageImage) {
                currentMontageImage = shotId;
                if(typeof updateImageLabel === 'function') updateImageLabel(targetObj.image);
                
                const bgSize = targetObj.zoom || '100%';
                const bgPos = `${targetObj.x || '50%'} ${targetObj.y || '50%'}`;
                
                if (activeLayer === 1) {
                    l2.style.backgroundImage = `url('${targetObj.image}')`;
                    l2.style.backgroundSize = bgSize;
                    l2.style.backgroundPosition = bgPos;
                    l2.style.opacity = 1;
                    l1.style.opacity = 0;
                    activeLayer = 2;
                } else {
                    l1.style.backgroundImage = `url('${targetObj.image}')`;
                    l1.style.backgroundSize = bgSize;
                    l1.style.backgroundPosition = bgPos;
                    l1.style.opacity = 1;
                    l2.style.opacity = 0;
                    activeLayer = 1;
                }
            }
        }
        montageAnimationFrame = requestAnimationFrame(updateTimedMontage);
    }
    
    montageAnimationFrame = requestAnimationFrame(updateTimedMontage);
}

function stopMontage() {
    if (montageAnimationFrame) cancelAnimationFrame(montageAnimationFrame);
    if (montageInterval) clearInterval(montageInterval);
}

// --- PROFESSIONAL IMAGE LABELS ---
const IMAGE_LABELS = {
    'broll/flickr_chap_14_1.jpg': 'The Future is Up To Us',
    'broll/flickr_chap_13_1.jpg': 'The Horizon of AGI',
    'broll/flickr_chap_12_0.jpg': 'Fluid Dynamics Analysis',
    'broll/flickr_chap_14_0.jpg': 'Human-AI Partnership',
    'broll/flickr_chap_13_0.jpg': 'Pricing Cognitive Labor',
    'broll/flickr_chap_12_1.jpg': 'Spatial Audio Perception',
    'broll/flickr_chap_11_1.jpg': 'Real-World Physics Engine',
    'broll/flickr_chap_10_0.jpg': '4 Billion Global Users',
    'broll/flickr_chap_11_0.jpg': 'Lifelong Sequence Memory',
    'broll/flickr_chap_9_1.jpg': 'Global Digital Classroom',
    'broll/flickr_chap_10_1.jpg': 'Trillion-Dollar Infrastructure',
    'broll/flickr_chap_8_1.jpg': 'Global AI Sovereignty',
    'broll/flickr_chap_9_0.jpg': 'Cellular Protein Fold Scan',
    'broll/flickr_chap_8_0.jpg': 'Corporate Enterprise Deployment',
    'broll/flickr_chap_7_1.jpg': 'Accelerated Development Cycle',
    'broll/flickr_chap_7_0.jpg': 'The Frontier Model Arena',
    'broll/flickr_chap_6_1.jpg': 'Multi-Agent Planning Board',
    'broll/flickr_chap_5_1.jpg': 'High-Resolution Satellite Scan',
    'broll/flickr_chap_4_0.jpg': 'Massive AI Core',
    'broll/flickr_chap_6_0.jpg': 'Autonomous Coding Robot',
    'broll/flickr_chap_4_1.jpg': 'Unified Data Modality',
    'broll/flickr_chap_3_0.jpg': 'Complex Reasoning Math',
    'broll/flickr_chap_5_0.jpg': 'AI Medical Diagnostic HUD',
    'broll/flickr_chap_3_1.jpg': 'Humanoid Deep Thought',
    'broll/flickr_chap_1_0.jpg': 'Silicon Valley Headquarters',
    'broll/flickr_chap_0_1.jpg': 'Planet Earth Digital Grid',
    'broll/flickr_chap_2_0.jpg': 'Open Source Code Repository',
    'broll/flickr_chap_2_1.jpg': 'Market Cap Plunge',
    'broll/flickr_chap_1_1.jpg': 'EU Server Infrastructure',
    'broll/flickr_chap_0_0.jpg': 'Global Network Infrastructure',
    'broll/cutscene_intro_1780712803821.png': 'The Dawn of AI',
    'broll/ai_brain_hero_1780709853443.png': 'Artificial Neural Pathway',
    'broll/cutscene_wallstreet_1780712844723.png': 'Global Markets / Wall Street',
    'broll/cutscene_deepseek_1780712822597.png': 'Open Source Architecture',
    'broll/deepseek_shockwave_1780709864688.png': 'The DeepSeek Shockwave',
    'broll/cutscene_reasoning_1780712832910.png': 'Test-Time Compute Analysis',
    'broll/ai_thinking_1780709877547.png': 'Machine Reasoning Process',
    'broll/gpt5_launch_1780709895738.png': 'GPT-5 Architecture',
    'broll/ai_multimodal_1780709905442.png': 'Multimodal Sensory Input',
    'broll/ai_agents_swarm_1780709915298.png': 'Autonomous Multi-Agent Swarm',
    'broll/cutscene_modelwars_1780712878426.png': 'The Frontier Model Wars',
    'broll/cutscene_future_city_1780712867134.png': 'Civilizational Scale Deployment',
    'broll/cutscene_humanai_1780712856997.png': 'Human-AI Collaboration',
    'broll/ai_real_world_1780709931527.png': 'Real World Impact Metrics',
    'broll/cutscene_datacenter_1780712811758.png': 'Trillion-Dollar Datacenter',
    'broll/cs_gemini4_arch_1780717290901.png': 'Lifelong Sequence Memory Core',
    'broll/ai_future_1780709942301.png': 'Approaching the AGI Horizon'
};

function updateImageLabel(imagePath) {
    const labelBox = document.getElementById('imageLabel');
    const labelText = document.getElementById('imageLabelText');
    if (!labelBox || !labelText) return;
    
    const text = IMAGE_LABELS[imagePath];
    if (text) {
        labelText.textContent = text;
        labelBox.style.display = 'block';
    } else {
        labelBox.style.display = 'none';
    }
}



const CUTSCENES = [
  null,
  "As 2024 drew to a close, the AI landscape felt almost settled.",
  "The compute moat was a myth. The global race was now truly open.",
  "The breakthrough was test-time compute: reasoning before responding.",
  "GPT-5 set a new ceiling for artificial intelligence.",
  "When AI learned to see, hear, and feel the world.",
  "2026 — AI stopped answering questions and started completing goals.",
  "A year when the world's best AI changed hands every few months.",
  "Not about new launches. About deploying at civilizational scale.",
  "The moment AI's promises became measurable reality.",
  "Four billion users. One trillion dollars. Two extraordinary years.",
  "We are not building smarter search engines. We are building thinking partners.",
  "The next leap required abandoning the transformer architecture entirely.",
  "Understanding the physics of a liquid just by watching it pour.",
  "The market wasn't pricing software. It was pricing cognitive labor."
];

const CHAPTER_CHORDS = [
  [146.83, 220.00, 293.66], // D minor
  [164.81, 196.00, 261.63], // E minor
  [220.00, 261.63, 329.63], // A minor
  [196.00, 246.94, 293.66], // G major
  [130.81, 164.81, 196.00], // C major
  [174.61, 220.00, 261.63], // F major
  [146.83, 174.61, 220.00], // D minor
  [246.94, 293.66, 370.00], // B minor
  [164.81, 220.00, 261.63], // A minor
  [130.81, 164.81, 220.00], // Fmaj7
  [146.83, 196.00, 261.63], // G7
  [110.00, 164.81, 220.00], // A minor (low)
  [130.81, 196.00, 261.63], // C major
  [146.83, 220.00, 329.63], // D minor (high)
  [130.81, 164.81, 196.00]  // C major (resolved)
];

const PRESENTER_NOTES = Array(15).fill("Autogenerated documentary slide.");

// --- STATE & AUDIO ---
let state = {
  cur: 0,
  voiceOn: true,
  musicOn: true,
  isPlaying: false,
  tickerOn: true,
  lastSpeechError: null
};

let audioCtx, musicMasterNode, voiceMasterNode, synth;
let voiceAudio = new Audio();
let cutsceneAudio = new Audio();

// Auto-advance logic for YouTube-style playback
voiceAudio.addEventListener('ended', () => {
    if (state.isPlaying) {
        setTimeout(() => {
            if (state.isPlaying && state.cur < CHAPTERS.length - 1) {
                nextSlide();
            }
        }, 400); // reduced breathing room
    }
});

let activeOscillators = [];
let silentCaptionInterval = null;

/**
 * Initializes the Web Audio API context and master gain nodes.
 * Fallbacks to SpeechSynthesis if Web Audio is unsupported.
 * @global
 */
function initAudioContext() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Music Routing
    musicMasterNode = audioCtx.createGain();
    const curVol = document.getElementById('musicVolSlider') ? document.getElementById('musicVolSlider').value : 0.8;
    musicMasterNode.gain.value = state.musicOn ? parseFloat(curVol) : 0;
    musicMasterNode.connect(audioCtx.destination);
    
    // Voice Routing (Fallback to speech synth if web audio fails, but primary uses html5 audio)
    synth = window.speechSynthesis;
  } catch (err) {
    console.error("Audio Context Init Failed:", err);
  }
}

// Ensure the external setMusicVolume overrides correctly if declared later
function setMusicVolume(v) {
  if (audioCtx && state.musicOn && musicMasterNode) {
    musicMasterNode.gain.setValueAtTime(musicMasterNode.gain.value, audioCtx.currentTime);
    musicMasterNode.gain.linearRampToValueAtTime(parseFloat(v), audioCtx.currentTime + 0.1);
  }
}

/**
 * Generates procedural ambient cinematic chords using Web Audio API oscillators.
 * Maps frequencies from CHAPTER_CHORDS to the current slide state.
 * @global
 */
function startMusic() {
  if (!audioCtx || !state.musicOn) return;
  activeOscillators.forEach(osc => {
    try { osc.stop(); osc.disconnect(); } catch (e) {}
  });
  activeOscillators = [];
  
  const chord = CHAPTER_CHORDS[state.cur] || CHAPTER_CHORDS[0];
  chord.forEach(freq => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.value = freq;
    
    gain.gain.value = 0;
    gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 2.0);
    
    osc.connect(gain);
    gain.connect(musicMasterNode);
    osc.start();
    activeOscillators.push(osc);
  });
}

/**
 * Generates a procedural "whoosh" transition sound effect using a noise buffer 
 * and an exponentially decaying biquad lowpass filter.
 * @global
 */
function playWhooshSound() {
  if (!audioCtx || !state.musicOn) return;
  const bufferSize = audioCtx.sampleRate * 1.5;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) { data[i] = Math.random() * 2 - 1; }
  
  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1000, audioCtx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 1.0);
  
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.0);
  
  noiseSource.connect(filter);
  filter.connect(gain);
  gain.connect(musicMasterNode);
  noiseSource.start();
}

let updateWordHighlighting = null;
let updateCutsceneHighlighting = null;

function stopAllSpeech() {
  voiceAudio.pause();
  cutsceneAudio.pause();
  if (updateWordHighlighting) {
      voiceAudio.removeEventListener('timeupdate', updateWordHighlighting);
      updateWordHighlighting = null;
  }
  if (updateCutsceneHighlighting) {
      cutsceneAudio.removeEventListener('timeupdate', updateCutsceneHighlighting);
      updateCutsceneHighlighting = null;
  }
  if (silentCaptionInterval) clearInterval(silentCaptionInterval);
  if (synth) synth.cancel();
}

/**
 * Plays the pre-generated edge-tts narrator MP3 for the current slide.
 * Syncs the visual text highlight captions to the estimated word durations.
 * Falls back to silent captions if audio fails.
 * @global
 */
function speakNow() {
  stopAllSpeech();
  if (!state.voiceOn) return runSilentCaptions();
  
  const capWrap = document.getElementById('caption');
  if (capWrap) capWrap.classList.add('visible');
  
  const cap = document.getElementById('captionText');
  cap.innerHTML = '';
  const text = NARRATIONS[state.cur];
  
  voiceAudio.src = 'audio/slide_' + state.cur + '.mp3';
  voiceAudio.play().then(() => {
     if (document.getElementById('captionWave')) document.getElementById('captionWave').style.display = 'inline-flex';
     const words = text.split(' ');
     words.forEach((w, i) => {
         const span = document.createElement('span');
         span.textContent = w + ' ';
         span.className = 'word';
         cap.appendChild(span);
     });
     
     const spans = cap.querySelectorAll('span');
     
     updateWordHighlighting = () => {
         if (!voiceAudio.duration) return;
         const progress = voiceAudio.currentTime / voiceAudio.duration;
         const targetIdx = Math.floor(progress * words.length);
         spans.forEach((span, i) => {
             if (i <= targetIdx) span.classList.add('aw');
             else span.classList.remove('aw');
         });
     };
     voiceAudio.addEventListener('timeupdate', updateWordHighlighting);
  }).catch(e => {
     if (e.name !== 'AbortError') {
         state.lastSpeechError = 'Audio block: ' + e.message;
         runSilentCaptions();
     }
  });
}

/**
 * Plays the custom cutscene MP3 for cinematic chapter transitions.
 * @global
 */
function playCutscene(onComplete) {
  stopAllSpeech();
  if (!state.voiceOn || !CUTSCENES[state.cur]) {
      if (onComplete) onComplete();
      return;
  }
  
  const csQuote = document.getElementById('csQuote');
  if (csQuote) {
      csQuote.innerHTML = '';
      const text = CUTSCENES[state.cur];
      const words = text.split(' ');
      words.forEach((w) => {
          const span = document.createElement('span');
          span.textContent = w + ' ';
          span.className = 'word';
          csQuote.appendChild(span);
      });
      
      const spans = csQuote.querySelectorAll('span');
      updateCutsceneHighlighting = () => {
          if (!cutsceneAudio.duration) return;
          const progress = cutsceneAudio.currentTime / cutsceneAudio.duration;
          const targetIdx = Math.floor(progress * words.length);
          spans.forEach((span, i) => {
              if (i <= targetIdx) span.classList.add('aw');
              else span.classList.remove('aw');
          });
      };
      cutsceneAudio.addEventListener('timeupdate', updateCutsceneHighlighting);
  }

  cutsceneAudio.src = 'audio/cutscene_' + state.cur + '.mp3';
  cutsceneAudio.onended = () => {
      setTimeout(() => { if (onComplete) onComplete(); }, 300); // 300ms gap after cutscene
  };
  cutsceneAudio.play().catch(e => {
      console.log('Cutscene skip', e);
      if (onComplete) onComplete();
  });
}

function runSilentCaptions() {
  const capWrap = document.getElementById('caption');
  if (capWrap) capWrap.classList.add('visible');
  if (document.getElementById('captionWave')) document.getElementById('captionWave').style.display = 'none';

  const cap = document.getElementById('captionText');
  cap.innerHTML = '';
  const text = NARRATIONS[state.cur] || "";
  const words = text.split(' ');
  const dur = CHAPTERS[state.cur].dur || 60;
  const wordTime = (dur * 1000) / words.length;
  
  words.forEach((w, i) => {
      const span = document.createElement('span');
      span.textContent = w + ' ';
      cap.appendChild(span);
  });
  
  let wIdx = 0;
  const spans = cap.querySelectorAll('span');
  silentCaptionInterval = setInterval(() => {
      if (wIdx < spans.length) { spans[wIdx].classList.add('active'); wIdx++; }
      else { 
          clearInterval(silentCaptionInterval); 
          if (state.isPlaying && state.cur < CHAPTERS.length - 1) {
              setTimeout(() => { if (state.isPlaying) nextSlide(); }, 400);
          }
      }
  }, wordTime);
}

// --- SLIDE NAVIGATION ---
function updateProgress() {
  const pct = (state.cur / (CHAPTERS.length - 1)) * 100;
  if (document.getElementById('progressFill')) document.getElementById('progressFill').style.width = pct + '%';
  if (document.getElementById('chapNum')) document.getElementById('chapNum').textContent = state.cur + 1;
}

function togglePlay() {
  state.isPlaying = !state.isPlaying;
  document.getElementById('playBtn').innerHTML = state.isPlaying ? '⏸' : '▶';
  if (state.isPlaying) {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      if (state.voiceOn) voiceAudio.play().catch(e=>console.log(e));
  } else {
      voiceAudio.pause();
      cutsceneAudio.pause();
  }
}
function toggleVoice() {
  state.voiceOn = !state.voiceOn;
  document.getElementById('voiceBtn').innerHTML = state.voiceOn ? 'Voice' : 'Voice (Muted)';
  document.getElementById('voiceBtn').classList.toggle('off', !state.voiceOn);
  if (!state.voiceOn) stopAllSpeech(); else speakNow();
}
function toggleMusic() {
  state.musicOn = !state.musicOn;
  document.getElementById('musicBtn').innerHTML = state.musicOn ? 'Music' : 'Music (Muted)';
  document.getElementById('musicBtn').classList.toggle('off', !state.musicOn);
  
  if (musicMasterNode) {
     const curVol = document.getElementById('musicVolSlider') ? document.getElementById('musicVolSlider').value : 0.8;
     musicMasterNode.gain.linearRampToValueAtTime(state.musicOn ? parseFloat(curVol) : 0, audioCtx.currentTime + 0.5);
  }
}

function applyTheme(idx) {
  const root = document.documentElement;
  if (idx === 1) root.style.setProperty('--accent', '#f43f5e'); // Pink
  else if (idx === 4) root.style.setProperty('--accent', '#10b981'); // Green
  else root.style.setProperty('--accent', '#7c3aed'); // Violet default
}

function nextSlide() { goTo(state.cur + 1, 'forward'); }
function prevSlide() { goTo(state.cur - 1, 'back'); }

/**
 * Core navigation engine. Transitions the UI to a specific slide index.
 * Handles DOM classes, background music chords, cutscenes, and chart building.
 * 
 * @param {number} idx - The index of the slide to navigate to (0 to CHAPTERS.length - 1).
 * @param {string} [dir='forward'] - The direction of navigation for potential animations.
 * @global
 */
let isTransitioning = false;
function goTo(idx, dir='forward') {
  if (idx < 0 || idx >= CHAPTERS.length) return;
  if (isTransitioning && idx !== state.cur) return;
  isTransitioning = true;
  setTimeout(() => isTransitioning = false, 300);
  
  const scenes = document.querySelectorAll('.scene, .slide');
  scenes.forEach(s => {
      s.classList.remove('active');
      const anElements = s.querySelectorAll('.an');
      anElements.forEach(el => el.classList.remove('show'));
  });
  
  const targetId = 's' + (idx + 1);
  let targetScene = document.getElementById(targetId);
  // Fallback if id uses slideXX
  if (!targetScene) targetScene = document.getElementById('slide' + (idx + 1));
  
  if (targetScene) {
      targetScene.classList.add('active');
      const anElements = targetScene.querySelectorAll('.an');
      anElements.forEach((el, i) => {
         setTimeout(() => el.classList.add('show'), 150 * i);
      });
  }

  state.cur = idx;
  applyTheme(idx);
  
  if (typeof updateNotes === 'function') updateNotes();
  
  startMusic();
  playWhooshSound();
  
  // Cutscene logic
  if (CUTSCENES[idx]) {
      const cutElem = document.getElementById('cutscene');
      // csQuote is now dynamically built by playCutscene, we skip it here!
      if (document.getElementById('csNum')) document.getElementById('csNum').textContent = 'CHAPTER ' + (idx + 1);
      if (document.getElementById('csTitle')) document.getElementById('csTitle').textContent = CHAPTERS[idx] ? CHAPTERS[idx].title : '';
      cutElem.classList.add('visible');
      
      const imgMap = {
         1: 'cs_intro.png', 2: 'cs_deepseek.png', 3: 'cs_reasoning.png',
         4: 'img_gpt5.png', 5: 'img_multimodal.png', 6: 'img_agents.png',
         7: 'cs_modelwars.png', 8: 'cs_humanai.png', 9: 'cs_wallstreet.png',
         10: 'cs_futurecity.png', 11: 'cs_gemini4.png', 12: 'ai_real_world_1780709931527.png',
         13: 'ai_future_1780709942301.png'
      };
      if (imgMap[idx]) {
         if (document.getElementById('csBgImg')) document.getElementById('csBgImg').src = imgMap[idx];
      }
      
      startMontage(600, 'cutscene', true); // Fast pacing for cutscenes
      playCutscene(() => {
          stopMontage();
          cutElem.classList.remove('visible');
          startMontage(1800, 'app', false); // Slower pacing for main slides
          speakNow();
      });
  } else {
      startMontage(1800, 'app', false);
      speakNow();
  }
  
  // Charts and Counters
  if (typeof onSlideEnter === 'function') onSlideEnter(idx);
}

// Hook to trigger an element explicitly on load if needed
function onSlideEnter(idx) {
   goTo(idx, 'forward');
}





function setMusicVolume(v) {
  if (audioCtx && state.musicOn && musicMasterNode) {
    musicMasterNode.gain.setValueAtTime(musicMasterNode.gain.value, audioCtx.currentTime);
    musicMasterNode.gain.linearRampToValueAtTime(parseFloat(v), audioCtx.currentTime + 0.1);
  }
}


let chartsBuilt = {};
const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { labels: { color: '#cbd5e1', font: { family: 'Inter', size: 12 } } } },
  scales: {
    x: { ticks: { color: '#64748b', font: { family: 'JetBrains Mono', size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
    y: { ticks: { color: '#64748b', font: { family: 'JetBrains Mono', size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
  }
};

function buildArcChart() {
  if (chartsBuilt.arc) return;
  chartsBuilt.arc = true;
  const ctx = document.getElementById('arcChart');
  if (!ctx) return;
  if (Chart.getChart(ctx)) Chart.getChart(ctx).destroy();
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Human Avg', 'GPT-4', 'Claude 3.5', 'o3 (Test-Time)'],
      datasets: [{
        label: 'Score (%)',
        data: [85, 48, 64, 88],
        backgroundColor: [
          'rgba(255,255,255,0.8)',
          'rgba(124,58,237,0.4)',
          'rgba(16,185,129,0.4)',
          'rgba(245,158,11,0.9)'
        ],
        borderRadius: 4
      }]
    },
    options: { ...CHART_DEFAULTS, plugins: { ...CHART_DEFAULTS.plugins, legend: { display: false } } }
  });
}

function buildParamChart() {
  if (chartsBuilt.param) return;
  chartsBuilt.param = true;
  const ctx = document.getElementById('paramChart');
  if (!ctx) return;
  if (Chart.getChart(ctx)) Chart.getChart(ctx).destroy();
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['GPT-2 (2019)', 'GPT-3 (2020)', 'GPT-4 (2023)', 'GPT-5 (2025)'],
      datasets: [{
        label: 'Parameters (Billions)',
        data: [1.5, 175, 1000, 1800],
        borderColor: '#06b6d4',
        tension: 0.3,
        borderWidth: 3,
        pointBackgroundColor: '#fff',
        fill: true,
        backgroundColor: 'rgba(6,182,212,0.1)'
      }]
    },
    options: { ...CHART_DEFAULTS, plugins: { ...CHART_DEFAULTS.plugins, legend: { display: false } } }
  });
}

function buildHorizonChart() {
  if (chartsBuilt.horizon) return;
  chartsBuilt.horizon = true;
  const ctx = document.getElementById('horizonChart');
  if (!ctx) return;
  if (Chart.getChart(ctx)) Chart.getChart(ctx).destroy();
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2023', '2024', '2025', '2026', '2027 (Proj)'],
      datasets: [{
        label: 'Global Cognitive Automation Index',
        data: [10, 25, 120, 480, 1500],
        borderColor: '#10b981',
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#ccc' } } },
      scales: {
        x: { ticks: { color: '#888' }, grid: { color: '#333' } },
        y: { ticks: { color: '#888' }, grid: { color: '#333' } }
      }
    }
  });
}

function buildModelChart() {
  if (chartsBuilt.model) return;
  chartsBuilt.model = true;
  const ctx = document.getElementById('modelChart');
  if (!ctx) return;
  if (Chart.getChart(ctx)) Chart.getChart(ctx).destroy();
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Reasoning', 'Coding', 'Math', 'Multimodal', 'Safety', 'Speed'],
      datasets: [
        { label: 'GPT-5',     data: [91,92,90,95,80,85], borderColor: '#7c3aed', backgroundColor: 'rgba(124,58,237,0.08)', pointBackgroundColor: '#a78bfa' },
        { label: 'Gemini 3',  data: [94,85,96,90,82,88], borderColor: '#06b6d4', backgroundColor: 'rgba(6,182,212,0.08)',  pointBackgroundColor: '#67e8f9' },
        { label: 'Claude 4',  data: [88,94,84,82,97,80], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.08)', pointBackgroundColor: '#6ee7b7' },
      ],
    },
    options: {
      ...CHART_DEFAULTS,
      scales: {
        r: {
          ticks:       { color: 'rgba(255,255,255,0.25)', font: { size: 9 }, backdropColor: 'transparent' },
          grid:        { color: 'rgba(255,255,255,0.05)' },
          pointLabels: { color: 'rgba(255,255,255,0.45)', font: { size: 10 } },
          min: 70, max: 100,
        },
      },
    },
  });
}

function buildInvestChart() {
  if (chartsBuilt.invest) return;
  chartsBuilt.invest = true;
  const ctx = document.getElementById('investChart');
  if (!ctx) return;
  if (Chart.getChart(ctx)) Chart.getChart(ctx).destroy();
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels:   ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      datasets: [{
        label: 'Investment ($B)',
        data:  [40, 68, 91, 130, 200, 480, 1020],
        backgroundColor: [
          'rgba(100,116,139,0.4)', 'rgba(100,116,139,0.4)', 'rgba(100,116,139,0.4)',
          'rgba(100,116,139,0.4)', 'rgba(6,182,212,0.45)', 'rgba(124,58,237,0.55)', 'rgba(124,58,237,0.8)',
        ],
        borderRadius: 5,
      }],
    },
    options: { ...CHART_DEFAULTS, plugins: { ...CHART_DEFAULTS.plugins, legend: { display: false } } },
  });
}


/* ─────────────────────────────────────────────────────────────
   SECTION 14: SLIDE ENTRANCE TRIGGER HANDLER
   ───────────────────────────────────────────────────────────── */
function startCountersForSlide(slideEl) {
  const counters = slideEl.querySelectorAll('.stat-n[data-count]');
  counters.forEach((el, index) => {
    const to = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = parseInt(el.dataset.duration) || 1200;
    
    // Set initial text
    el.textContent = (prefix || '') + "0" + (suffix || '');
    
    // Stagger counters with 150ms delay per counter
    setTimeout(() => {
      animCounter(el, 0, to, duration, prefix, suffix);
    }, index * 150);
  });
}

function onSlideEnter(idx) {
  const slideId = 's' + (idx + 1);
  const slideEl = document.getElementById(slideId);
  if (slideEl) {
    startCountersForSlide(slideEl);
  }

  // idx 2 -> Chapter 3 (s3)
  if (idx === 2) {
    buildArcChart();
    document.querySelectorAll('#pbarList .pbar-f').forEach(bar => {
      bar.style.width = '0%';
      setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 100);
    });
  }
  // idx 3 -> Chapter 4 (s4)
  if (idx === 3) {
    buildParamChart();
  }
  // idx 6 -> Chapter 7 (s7)
  if (idx === 6) {
    buildModelChart();
  }
  // idx 9 -> Chapter 10 (s10)
  if (idx === 9) {
    buildInvestChart();
  }
  // idx 13 -> Chapter 14 (s14)
  if (idx === 13) {
    buildHorizonChart();
  }
}

function animCounter(target, from, to, duration, prefix, suffix) {
  const el = typeof target === 'string' ? document.getElementById(target) : target;
  if (!el) return;
  const steps   = 55;
  const inc     = (to - from) / steps;
  const isFloat = String(to).includes('.');
  let val = from, step = 0;
  
  // Clear any existing interval to prevent overlapping counts
  if (el.counterInterval) clearInterval(el.counterInterval);
  
  el.counterInterval = setInterval(() => {
    val += inc; step++;
    el.textContent = (prefix || '') + (isFloat ? val.toFixed(1) : Math.round(val)) + (suffix || '');
    if (step >= steps) {
      el.textContent = (prefix || '') + to + (suffix || ''); 
      clearInterval(el.counterInterval);
      el.counterInterval = null;
    }
  }, duration / steps);
}


/* ─────────────────────────────────────────────────────────────
   SECTION 15: KNOWLEDGE CHECK QUIZ
   ───────────────────────────────────────────────────────────── */
const QUIZ = [
  {
    q: "Which AI model's release in January 2025 proved the compute moat was a myth by being 96% cheaper?",
    opts: ["Gemini 3", "Claude 4", "DeepSeek R1", "Llama 4"],
    ans: 2,
    exp: "DeepSeek R1 shocked the industry by matching frontier models at a fraction of the cost."
  },
  {
    q: "What was the breakthrough that allowed models to 'think' before responding?",
    opts: ["Larger Context Windows", "Test-Time Compute", "Quantum Processing", "Recurrent Layers"],
    ans: 1,
    exp: "Test-time compute allowed models to allocate more processing power during inference."
  },
  {
    q: "By mid-2025, frontier models like GPT-5 were born with what native capability?",
    opts: ["Emotional Intelligence", "Multimodality", "Telepathy", "Biological Synthesis"],
    ans: 1,
    exp: "Models became natively multimodal, processing text, images, audio, and video simultaneously."
  },
  {
    q: "The defining story of 2026 was the shift from AI chatbots to what?",
    opts: ["Autonomous Agents", "Hardware Robots", "Search Engines", "VR Environments"],
    ans: 0,
    exp: "AI stopped answering questions and started completing goals as autonomous agents."
  },
  {
    q: "By the end of 2026, approximately how many people were regular AI users?",
    opts: ["100 Million", "1 Billion", "4 Billion", "8 Billion"],
    ans: 2,
    exp: "4 Billion people—more than half the planet's adult population—were using AI regularly."
  },
  {
    q: "Gemini 4 shifted the paradigm by replacing sliding context windows with what?",
    opts: ["Continuous Sequence Memory", "Holographic Storage", "Neural Linking", "Static Databases"],
    ans: 0,
    exp: "Gemini 4 introduced lifelong sequence memory, allowing it to retain massive amounts of continuous data."
  }
];

let quizState = { idx: 0, score: 0, answered: false };

function openQuiz() {
  quizState = { idx: 0, score: 0, answered: false };
  renderQuestion();
  document.getElementById('quizModal').classList.add('show');
}
function closeQuiz() { document.getElementById('quizModal').classList.remove('show'); }

function renderQuestion() {
  quizState.answered = false;
  const q   = QUIZ[quizState.idx];
  const pct = ((quizState.idx / QUIZ.length) * 100).toFixed(0);

  document.getElementById('quizBox').innerHTML = `
    <div class="qz-head">🧠 Knowledge Check — Question ${quizState.idx + 1} of ${QUIZ.length}</div>
    <div class="qz-prog"><div class="qz-prog-f" style="width:${pct}%"></div></div>
    <div class="qz-q">${q.q}</div>
    <div class="qz-opts" id="qopts">
      ${q.opts.map((opt, i) => `<button class="qz-opt" onclick="selectAnswer(${i})">${opt}</button>`).join('')}
    </div>
    <div class="qz-fb" id="qfb"></div>
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <div style="font-size:12px;color:var(--muted);">Score: ${quizState.score}/${QUIZ.length}</div>
      <div style="display:flex;gap:8px;">
        <button class="qbtn gh" onclick="closeQuiz()">✕ Close</button>
        <button class="qbtn pr" id="qnxt" onclick="nextQuestion()" style="display:none;">Next →</button>
      </div>
    </div>`;
}

function selectAnswer(selected) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = QUIZ[quizState.idx];

  document.querySelectorAll('.qz-opt').forEach((btn, i) => {
    if (i === q.ans)                    btn.classList.add('cor');
    else if (i === selected && i !== q.ans) btn.classList.add('wrg');
    btn.style.pointerEvents = 'none'; 
  });

  if (selected === q.ans) quizState.score++;

  const fb = document.getElementById('qfb');
  const isCorrect = selected === q.ans;
  fb.textContent   = (isCorrect ? '✅ Correct! ' : '❌ Not quite. ') + q.exp;
  fb.style.cssText = `
    display:block; border-radius:10px; padding:12px 14px; font-size:13px; line-height:1.65;
    background:${isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(236,72,153,0.1)'};
    color:${isCorrect ? '#6ee7b7' : '#f9a8d4'};
  `;

  if (quizState.idx < QUIZ.length - 1) {
    document.getElementById('qnxt').style.display = 'block';
  } else {
    setTimeout(showQuizResults, 1400);
  }
}

function nextQuestion() {
  quizState.idx++;
  renderQuestion();
}

function showQuizResults() {
  const pct   = Math.round(quizState.score / QUIZ.length * 100);
  const grade = pct >= 83 ? ['🏆', 'Expert! You know your AI history cold.']
              : pct >= 66 ? ['🎓', 'Well done! Solid knowledge of the AI era.']
              : pct >= 50 ? ['📚', 'Good effort! Review the slides to go deeper.']
              :             ['🤔', 'Keep learning — this era has a lot to absorb!'];

  document.getElementById('quizBox').innerHTML = `
    <div style="text-align:center;padding:16px 0;">
      <div style="font-size:64px;margin-bottom:14px;">${grade[0]}</div>
      <h2 style="font-family:'Outfit',sans-serif;font-size:26px;font-weight:800;margin-bottom:8px;">${grade[1]}</h2>
      <p style="color:#94a3b8;margin-bottom:22px;">
        You scored <strong style="color:#f1f5f9;">${quizState.score} / ${QUIZ.length}</strong> (${pct}%)
      </p>
      <div style="background:rgba(255,255,255,0.04);border-radius:10px;height:8px;overflow:hidden;margin-bottom:28px;">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:10px;transition:width 1s ease;"></div>
      </div>
      <div style="display:flex;gap:10px;justify-content:center;">
        <button class="qbtn pr" onclick="openQuiz()">↩ Retry Quiz</button>
        <button class="qbtn gh" onclick="closeQuiz()">✕ Close</button>
      </div>
    </div>`;
}


/* ─────────────────────────────────────────────────────────────
   SECTION 16: INTERFACE & WINDOW PANELS
   ───────────────────────────────────────────────────────────── */
function showOverlay() { document.getElementById('overlay').classList.add('show'); }
function hideOverlay() { document.getElementById('overlay').classList.remove('show'); }
function closeAll()    { closeSidebar(); closeNotes(); closeHelp(); }

function openSidebar() {
  const sbList = document.getElementById('sb-list');
  if (!sbList) return;
  sbList.innerHTML = '';
  CHAPTERS.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'sb-btn' + (i === state.cur ? ' active' : '');
    btn.innerHTML = `<div style="font-weight:700; margin-bottom:2px;">${i+1}. ${c.title}</div><div style="font-size:11px; opacity:0.7;">${c.sub}</div>`;
    btn.onclick = () => { closeSidebar(); goTo(i, i > state.cur ? 'forward' : 'back'); };
    sbList.appendChild(btn);
  });
  document.getElementById('sidebar').classList.add('open');
  showOverlay();
}

function closeSidebar() {
  const sb = document.getElementById('sidebar');
  if (sb) sb.classList.remove('open');
  hideOverlay();
}

function openHelp()  { document.getElementById('helpOverlay').classList.add('show'); }
function closeHelp() { document.getElementById('helpOverlay').classList.remove('show'); }

function openNotes() {
  updateNotes();
  document.getElementById('notesPanel').classList.add('open');
  showOverlay();
}
function closeNotes() {
  document.getElementById('notesPanel').classList.remove('open');
  hideOverlay();
}

function updateNotes() {
  document.getElementById('notesCnt').innerHTML = `
    <div class="notes-ch">${CHAPTERS[state.cur].title}</div>
    <div class="notes-txt">${PRESENTER_NOTES[state.cur]}</div>
    <div class="notes-tip">💡 Duration: ~${CHAPTERS[state.cur].dur}s · Slide ${state.cur + 1} of ${CHAPTERS.length}</div>`;
}

function toggleTicker() {
  state.tickerOn = !state.tickerOn;
  document.getElementById('liveTicker').classList.toggle('show', state.tickerOn);
}


/* ─────────────────────────────────────────────────────────────
   SECTION 17: START DOCUMENTARY PRESENTATION
   ───────────────────────────────────────────────────────────── */
function startPresentation() {
  const splash = document.getElementById('splash');
  splash.classList.add('hidden');
  setTimeout(() => { splash.style.display = 'none'; }, 1300);

  // Initialize Audio Context immediately on click to guarantee it unlocks
  initAudioContext();
  
  // Unlock HTML5 Audio element on click
  voiceAudio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
  voiceAudio.play().catch(e => console.log('Audio unlock deferred:', e));

  startMusic();
  playWhooshSound();

  setTimeout(() => { 
      state.isPlaying = true;
      document.getElementById('playBtn').innerHTML = '⏸';
      speakNow(); 
  }, 800);
}


/* ─────────────────────────────────────────────────────────────
   SECTION 18: KEYBOARD SHORTCUTS
   ───────────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

  const k = e.key;

  if (k === 'ArrowRight' || k === ' ')  { e.preventDefault(); nextSlide(); }
  if (k === 'ArrowLeft')                { e.preventDefault(); prevSlide(); }
  if (k === 'Home')                     goTo(0, 'back');
  if (k === 'End')                      goTo(CHAPTERS.length - 1, 'forward');

  if (k >= '1' && k <= '9') {
    const i = parseInt(k) - 1;
    if (i < CHAPTERS.length) goTo(i, i > state.cur ? 'forward' : 'back');
  }

  if (k === 'p' || k === 'P') togglePlay();
  if (k === 'v' || k === 'V') toggleVoice();
  if (k === 'm' || k === 'M') toggleMusic();
  if (k === 'd' || k === 'D') toggleDebug();

  if (k === 'n' || k === 'N') {
    document.getElementById('notesPanel').classList.contains('open') ? closeNotes() : openNotes();
  }
  if (k === 'f' || k === 'F') toggleFullscreen();
  if (k === 'q' || k === 'Q') openQuiz();
  if (k === 't' || k === 'T') toggleTicker();
  if (k === '?' || k === '/')  openHelp();

  if (k === 'Escape') { closeAll(); closeQuiz(); }
});


/* ─────────────────────────────────────────────────────────────
   SECTION 19: TOUCH SWIPE DETECTOR
   ───────────────────────────────────────────────────────────── */
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 55) { 
    dx < 0 ? nextSlide() : prevSlide();
  }
});


/* ─────────────────────────────────────────────────────────────
   SECTION 20: FULLSCREEN CONTROLS
   ───────────────────────────────────────────────────────────── */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
}
function toggleDebug() {
  const panel = document.getElementById('debugPanel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  updateDebugInfo();
}

function updateDebugInfo() {
  const panel = document.getElementById('debugPanel');
  if (!panel || panel.style.display === 'none') return;
  
  const voices = synth ? synth.getVoices() : [];
  const activeVoiceName = utterance && utterance.voice ? utterance.voice.name : 'None';
  
  document.getElementById('debugContent').innerHTML = `
    <div style="border-bottom:1px solid var(--border); padding-bottom:4px; margin-bottom:4px;">Audio Context: ${audioCtx ? audioCtx.state : 'Not initialized'}</div>
    <div>Synth Supported: ${!!synth}</div>
    <div>Voices Loaded: ${voices.length}</div>
    <div>Synth Speaking: ${synth ? synth.speaking : 'false'}</div>
    <div>Synth Pending: ${synth ? synth.pending : 'false'}</div>
    <div>Synth Paused: ${synth ? synth.paused : 'false'}</div>
    <div style="border-bottom:1px solid var(--border); padding-bottom:4px; margin-bottom:4px; margin-top:4px;">Current Voice: ${activeVoiceName}</div>
    <div style="color:#fde68a;">Last Error: ${state.lastSpeechError || 'None'}</div>
    <div>Silent Fallback: ${!!silentCaptionInterval}</div>
  `;
}
// Update debug info periodically
setInterval(updateDebugInfo, 1000);


/* ─────────────────────────────────────────────────────────────
   SECTION 21: LIFE-CYCLE INITIALIZATION
   ───────────────────────────────────────────────────────────── */
(function init() {
  if (synth) {
    try {
      synth.cancel();
    } catch (e) {}
  }
  applyTheme(0);    
   
  updateNotes();    
  onSlideEnter(0);  
})();


const NARRATIONS = [
  "Welcome to The Intelligence Revolution. In just two years — 2025 and 2026 — artificial intelligence went from a powerful tool to something far more profound: a genuine thinking partner for all of humanity. This is the story of those two extraordinary years, the breakthroughs that defined them, and the world they created.",
  "To understand how dramatic 2025 was, we need to appreciate how stable late 2024 felt. Three models dominated: GPT-4o for conversation, Claude 3.5 Sonnet for coding, and Gemini 1.5 for long-context tasks. Developers had workflows. Companies had budgets. The EU had passed the world's first AI law. Everything seemed... settled. It wasn't.",
  "On January 20th, 2025, a Chinese AI startup called DeepSeek released a model called R1 — and Silicon Valley went into shock. It matched GPT-4 on reasoning and coding benchmarks. It was fully open-source, under the MIT license. And it cost 96% less to run than OpenAI's equivalent. Nvidia lost 600 billion dollars in market cap in a single trading session. The message was unmistakable: the compute moat was a myth. The global AI race was now truly open.",
  "The most consequential breakthrough of this era wasn't a bigger model. It was a fundamentally different approach to intelligence: letting AI reason before responding. Called test-time compute, this allows models to allocate more processing power during inference — not to think faster, but to think more carefully. The results were astonishing. OpenAI's o3 scored 88% on ARC-AGI — a test specifically engineered to defeat AI pattern matching. The human average? 85%. For the first time in history, a machine matched human general reasoning on a fair test.",
  "In August 2025, OpenAI released GPT-5 — and it was unlike anything that came before. One point eight trillion parameters. A context window of one million tokens — large enough to hold 750 full novels in a single conversation. It processed text, images, audio, and video simultaneously — not as separate features bolted together, but as unified, native capabilities baked into the architecture from day one. It was 5 times faster than GPT-4o. And it was, without question, the most capable AI system ever built.",
  "By mid-2025, frontier models had stopped treating vision and hearing as bolt-on features. GPT-5, Gemini 3.1, Claude 3.7, and Llama 4 were born multimodal — perceiving the world through multiple senses simultaneously and natively. They could watch hours of surgical footage and suggest improved techniques. Listen to a patient describe symptoms and cross-reference thousands of studies. Read a satellite image and model environmental change over decades. AI had grown new senses — and it was learning to use all of them at once.",
  "If 2025 was the year AI learned to think, 2026 was the year it learned to act. The shift from chatbots to autonomous agents was the defining story of the year. Instead of answering questions, AI began completing goals. You didn't ask it how to build an app — you assigned it the project. Claude Code, OpenAI Operator, and Gemini Enterprise became core professional infrastructure. Multi-agent systems — where specialized AIs collaborated like a team — handled entire workflows without human intervention at every step. The era of AI as assistant was over. The era of AI as colleague had begun.",
  "The model wars of 2025 were unprecedented in the history of technology. Every single quarter, the world's best AI model changed hands. DeepSeek shocked in January. Gemini's Deep Think mode led through spring. Meta's Llama 4 Scout democratized open-source frontier AI in May. GPT-5 set a new ceiling in August. Claude 4 Opus became the gold standard for safety and reliability. Gemini 3 Ultra broke every math and science benchmark by December. In 12 months, the landscape shifted more than in the previous 5 years combined.",
  "2026 was not primarily about releasing new models. It was about deploying what already existed — reliably, safely, and at civilizational scale. Enterprise adoption accelerated dramatically. The EU AI Act came into full enforcement. Governments from Washington to Beijing to Brussels published major AI governance frameworks. And the global distribution of AI power shifted irrevocably: frontier models from China, Europe, the UAE, and South Korea achieved full parity with US systems. For the first time in the AI era, no single nation held a decisive lead.",
  "The real question of these two years was never 'can AI do this?' It was 'what happens when AI actually does it, everywhere, all at once?' The answers arrived in measurable form: AI diagnostic systems matched specialists in 14 cancer types. Drug discovery pipelines compressed from a decade to 18 months. 52% of all production code was AI-assisted. 400 million students received personalized AI tutoring for the first time. Hedge funds using AI models outperformed benchmarks by 23%. The promises of the previous decade were becoming quantifiable, undeniable reality.",
  "Let the numbers tell the final story. By 2026, four billion people were regular AI users — more than half the planet's adults. Global AI investment exceeded one trillion dollars in 2025 alone. Over 200 frontier-class models launched during the year. And 87% of Fortune 500 companies had deployed autonomous AI agents in core business operations. In just 24 months, artificial intelligence had become as fundamental to civilization as electricity, the internet, or the written word.",
  "By late 2026, the limits of transformer-based architectures were becoming apparent. Google's highly anticipated Gemini 4 fundamentally shifted the paradigm. It replaced sliding context windows with continuous, lifelong sequence memory. It could ingest an entire corporate database in seconds and retain it flawlessly. It featured a native world simulation engine, allowing it to predict physical and logical outcomes before taking action.",
  "Gemini 4 also marked the beginning of the multimodal singularity. It wasn't trained on text and isolated images; it was trained on continuous, unedited real-time video, spatial audio, and robotic telemetry data simultaneously. For the first time, the AI didn't just understand what a cup was by reading the word. It understood the physics of the liquid inside it, the sound it makes when placed on a table, and the intent of the person reaching for it.",
  "As 2026 drew to a close, the narrative had irrevocably shifted. The market was no longer pricing in better software; it was pricing in the automation of cognitive labor at a global scale. We were rapidly approaching a horizon where artificial general intelligence was no longer a philosophical debate, but an engineering inevitability.",
  "We are not building smarter search engines. We are building thinking partners for all of humanity. As we look beyond 2026, the most important question is no longer what AI can do — but what we will choose to do with it. The intelligence revolution has happened. The future is up to us."
];


// --- YOUTUBE FEATURES ---
let totalDuration = 0;
CHAPTERS.forEach(c => totalDuration += c.dur);

function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return m + ':' + (s < 10 ? '0'+s : s);
}

function updateVideoTime() {
    let elapsed = 0;
    for(let i=0; i<state.cur; i++) elapsed += CHAPTERS[i].dur;
    
    // Add partial progress of current slide based on audio
    if (voiceAudio && !voiceAudio.paused && voiceAudio.duration) {
        elapsed += voiceAudio.currentTime;
    }
    
    const disp = document.getElementById('timeDisp');
    if (disp) disp.textContent = formatTime(elapsed) + ' / ' + formatTime(totalDuration);
    
    // Smooth progress bar update
    const pct = (elapsed / totalDuration) * 100;
    const pFill = document.getElementById('progressFill');
    if (pFill) pFill.style.width = pct + '%';
}
setInterval(updateVideoTime, 100);

function scrubVideo(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const targetSlide = Math.floor(pct * CHAPTERS.length);
    goTo(Math.max(0, Math.min(CHAPTERS.length - 1, targetSlide)));
}

let ccEnabled = true;
function toggleCC() {
    ccEnabled = !ccEnabled;
    const btn = document.getElementById('ccBtn');
    if (btn) btn.classList.toggle('off', !ccEnabled);
    
    const capWrap = document.getElementById('caption');
    if (capWrap) {
        if (ccEnabled && state.voiceOn) capWrap.classList.add('visible');
        else capWrap.classList.remove('visible');
    }
}

function handleScreenClick() {
    togglePlay();
    const icon = document.getElementById('centerPlayPause');
    if (icon) {
        icon.textContent = state.isPlaying ? '▶' : '⏸';
        icon.classList.remove('flash');
        void icon.offsetWidth; // trigger reflow
        icon.classList.add('flash');
        setTimeout(() => icon.classList.remove('flash'), 500);
    }
}
