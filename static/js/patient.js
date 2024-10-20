const edDataKeys = {
  age: null,
  gender: null,
  arrivalmode: null,
  previousdispo: null,
  "2ndarymalig": null,
  abdomhernia: null,
  abdomnlpain: null,
  abortcompl: null,
  acqfootdef: null,
  acrenlfail: null,
  acutecvd: null,
  acutemi: null,
  acutphanm: null,
  adjustmentdisorders: null,
  adltrespfl: null,
  alcoholrelateddisorders: null,
  allergy: null,
  amniosdx: null,
  analrectal: null,
  anemia: null,
  aneurysm: null,
  anxietydisorders: null,
  appendicitis: null,
  artembolism: null,
  asppneumon: null,
  asthma: null,
  attentiondeficitconductdisruptivebeha: null,
  backproblem: null,
  biliarydx: null,
  birthasphyx: null,
  birthtrauma: null,
  bladdercncr: null,
  blindness: null,
  bnignutneo: null,
  bonectcncr: null,
  bph: null,
  brainnscan: null,
  breastcancr: null,
  breastdx: null,
  brnchlngca: null,
  bronchitis: null,
  burns: null,
  cardiaarrst: null,
  cardiacanom: null,
  carditis: null,
  cataract: null,
  cervixcancr: null,
  chestpain: null,
  chfnonhp: null,
  chrkidneydisease: null,
  coaghemrdx: null,
  coloncancer: null,
  comabrndmg: null,
  complicdevi: null,
  complicproc: null,
  conduction: null,
  contraceptiv: null,
  copd: null,
  coronathero: null,
  crushinjury: null,
  cysticfibro: null,
  deliriumdementiaamnesticothercognitiv: null,
  developmentaldisorders: null,
  diabmelnoc: null,
  diabmelwcm: null,
  disordersusuallydiagnosedininfancych: null,
  diverticulos: null,
  dizziness: null,
  dminpreg: null,
  dysrhythmia: null,
  earlylabor: null,
  ecodesadverseeffectsofmedicalcare: null,
  ecodesadverseeffectsofmedicaldrugs: null,
  ecodescutpierce: null,
  ecodesdrowningsubmersion: null,
  ecodesfall: null,
  ecodesfirearm: null,
  ecodesfireburn: null,
  ecodesmachinery: null,
  ecodesmotorvehicletrafficmvt: null,
  ecodesnaturalenvironment: null,
  ecodesotherspecifiedandclassifiable: null,
  ecodesotherspecifiednec: null,
  ecodespedalcyclistnotmvt: null,
  ecodesplaceofoccurrence: null,
  ecodespoisoning: null,
  ecodesstruckbyagainst: null,
  ecodessuffocation: null,
  ecodestransportnotmvt: null,
  ecodesunspecified: null,
  ectopicpreg: null,
  encephalitis: null,
  endometrios: null,
  epilepsycnv: null,
  esophcancer: null,
  esophgealdx: null,
  exameval: null,
  eyeinfectn: null,
  fatigue: null,
  femgenitca: null,
  feminfertil: null,
  fetaldistrs: null,
  fluidelcdx: null,
  fuo: null,
  fxarm: null,
  fxhip: null,
  fxleg: null,
  fxskullfac: null,
  gangrene: null,
  gasduoulcer: null,
  gastritis: null,
  gastroent: null,
  giconganom: null,
  gihemorrhag: null,
  giperitcan: null,
  glaucoma: null,
  goutotcrys: null,
  guconganom: null,
  hdnckcancr: null,
  headachemig: null,
  hemmorhoids: null,
  hemorrpreg: null,
  hepatitis: null,
  hivinfectn: null,
  hodgkinsds: null,
  hrtvalvedx: null,
  htn: null,
  htncomplicn: null,
  htninpreg: null,
  hyperlipidem: null,
  immunitydx: null,
  immunizscrn: null,
  impulsecontroldisordersnec: null,
  inducabortn: null,
  infectarth: null,
  influenza: null,
  infmalegen: null,
  intestinfct: null,
  intobstruct: null,
  intracrninj: null,
  jointinjury: null,
  kidnyrnlca: null,
  lateeffcvd: null,
  leukemias: null,
  liveborn: null,
  liveribdca: null,
  longpregncy: null,
  lowbirthwt: null,
  lungexternl: null,
  lymphenlarg: null,
  maintchemr: null,
  malgenitca: null,
  maligneopls: null,
  malposition: null,
  meningitis: null,
  menopausldx: null,
  menstrualdx: null,
  miscellaneousmentalhealthdisorders: null,
  mooddisorders: null,
  mouthdx: null,
  ms: null,
  multmyeloma: null,
  mycoses: null,
  nauseavomit: null,
  neoplsmunsp: null,
  nephritis: null,
  nervcongan: null,
  nonepithca: null,
  nonhodglym: null,
  nutritdefic: null,
  obrelatedperintrauma: null,
  opnwndextr: null,
  opnwndhead: null,
  osteoarthros: null,
  osteoporosis: null,
  otacqdefor: null,
  otaftercare: null,
  otbnignneo: null,
  otbonedx: null,
  otcirculdx: null,
  otcomplbir: null,
  otconganom: null,
  otconntiss: null,
  otdxbladdr: null,
  otdxkidney: null,
  otdxstomch: null,
  otendodsor: null,
  otfemalgen: null,
  othbactinf: null,
  othcnsinfx: null,
  othematldx: null,
  othercvd: null,
  othereardx: null,
  otheredcns: null,
  othereyedx: null,
  othergidx: null,
  othergudx: null,
  otherinjury: null,
  otherpregnancyanddeliveryincludingnormal: null,
  otherscreen: null,
  othfracture: null,
  othheartdx: null,
  othinfectns: null,
  othliverdx: null,
  othlowresp: null,
  othmalegen: null,
  othnervdx: null,
  othskindx: null,
  othveindx: null,
  otinflskin: null,
  otitismedia: null,
  otjointdx: null,
  otnutritdx: null,
  otperintdx: null,
  otpregcomp: null,
  otprimryca: null,
  otrespirca: null,
  otupprresp: null,
  otuprspin: null,
  ovariancyst: null,
  ovarycancer: null,
  pancreascan: null,
  pancreasdx: null,
  paralysis: null,
  parkinsons: null,
  pathologfx: null,
  pelvicobstr: null,
  perintjaund: null,
  peripathero: null,
  peritonitis: null,
  personalitydisorders: null,
  phlebitis: null,
  pid: null,
  pleurisy: null,
  pneumonia: null,
  poisnnonmed: null,
  poisnotmed: null,
  poisonpsych: null,
  precereoccl: null,
  prevcsectn: null,
  prolapse: null,
  prostatecan: null,
  pulmhartdx: null,
  rctmanusca: null,
  rehab: null,
  respdistres: null,
  retinaldx: null,
  rheumarth: null,
  schizophreniaandotherpsychoticdisorde: null,
  screeningandhistoryofmentalhealthan: null,
  septicemia: null,
  septicemiaexceptinlabor: null,
  sexualinfxs: null,
  shock: null,
  sicklecell: null,
  skininfectn: null,
  skinmelanom: null,
  sle: null,
  socialadmin: null,
  spincorinj: null,
  spontabortn: null,
  sprain: null,
  stomchcancr: null,
  substancerelateddisorders: null,
  suicideandintentionalselfinflictedin: null,
  superficinj: null,
  syncope: null,
  teethdx: null,
  testiscancr: null,
  thyroidcncr: null,
  thyroiddsor: null,
  tia: null,
  tonsillitis: null,
  tuberculosis: null,
  ulceratcol: null,
  ulcerskin: null,
  umbilcord: null,
  unclassified: null,
  urinstone: null,
  urinyorgca: null,
  uteruscancr: null,
  uti: null,
  varicosevn: null,
  viralinfect: null,
  whtblooddx: null,
  triage_vital_hr: null,
  triage_vital_sbp: null,
  triage_vital_dbp: null,
  triage_vital_rr: null,
  triage_vital_o2: null,
  triage_vital_temp: null,
  cc_abdominalcramping: null,
  cc_abdominaldistention: null,
  cc_abdominalpain: null,
  cc_abdominalpainpregnant: null,
  cc_abnormallab: null,
  cc_abscess: null,
  cc_addictionproblem: null,
  cc_agitation: null,
  cc_alcoholintoxication: null,
  cc_alcoholproblem: null,
  cc_allergicreaction: null,
  cc_alteredmentalstatus: null,
  cc_animalbite: null,
  cc_ankleinjury: null,
  cc_anklepain: null,
  cc_anxiety: null,
  cc_arminjury: null,
  cc_armpain: null,
  cc_armswelling: null,
  cc_assaultvictim: null,
  cc_asthma: null,
  cc_backpain: null,
  "cc_bleeding/bruising": null,
  cc_blurredvision: null,
  cc_bodyfluidexposure: null,
  cc_breastpain: null,
  cc_breathingdifficulty: null,
  cc_breathingproblem: null,
  cc_burn: null,
  cc_cardiacarrest: null,
  cc_cellulitis: null,
  cc_chestpain: null,
  cc_chesttightness: null,
  cc_chills: null,
  cc_coldlikesymptoms: null,
  cc_confusion: null,
  cc_conjunctivitis: null,
  cc_constipation: null,
  cc_cough: null,
  cc_cyst: null,
  "cc_decreasedbloodsugar-symptomatic": null,
  cc_dehydration: null,
  cc_dentalpain: null,
  cc_depression: null,
  cc_detoxevaluation: null,
  cc_diarrhea: null,
  cc_dizziness: null,
  "cc_drug/alcoholassessment": null,
  cc_drugproblem: null,
  cc_dyspnea: null,
  cc_dysuria: null,
  cc_earpain: null,
  cc_earproblem: null,
  cc_edema: null,
  cc_elbowpain: null,
  "cc_elevatedbloodsugar-nosymptoms": null,
  "cc_elevatedbloodsugar-symptomatic": null,
  cc_emesis: null,
  cc_epigastricpain: null,
  cc_epistaxis: null,
  cc_exposuretostd: null,
  cc_extremitylaceration: null,
  cc_extremityweakness: null,
  cc_eyeinjury: null,
  cc_eyepain: null,
  cc_eyeproblem: null,
  cc_eyeredness: null,
  cc_facialinjury: null,
  cc_faciallaceration: null,
  cc_facialpain: null,
  cc_facialswelling: null,
  cc_fall: null,
  "cc_fall>65": null,
  cc_fatigue: null,
  cc_femaleguproblem: null,
  cc_fever: null,
  "cc_fever-75yearsorolder": null,
  "cc_fever-9weeksto74years": null,
  cc_feverimmunocompromised: null,
  cc_fingerinjury: null,
  cc_fingerpain: null,
  cc_fingerswelling: null,
  cc_flankpain: null,
  "cc_follow-upcellulitis": null,
  cc_footinjury: null,
  cc_footpain: null,
  cc_footswelling: null,
  cc_foreignbodyineye: null,
  cc_fulltrauma: null,
  cc_generalizedbodyaches: null,
  cc_gibleeding: null,
  cc_giproblem: null,
  cc_groinpain: null,
  cc_hallucinations: null,
  cc_handinjury: null,
  cc_handpain: null,
  cc_headache: null,
  "cc_headache-newonsetornewsymptoms": null,
  "cc_headache-recurrentorknowndxmigraines": null,
  "cc_headachere-evaluation": null,
  cc_headinjury: null,
  cc_headlaceration: null,
  cc_hematuria: null,
  cc_hemoptysis: null,
  cc_hippain: null,
  cc_homicidal: null,
  cc_hyperglycemia: null,
  cc_hypertension: null,
  cc_hypotension: null,
  cc_influenza: null,
  cc_ingestion: null,
  cc_insectbite: null,
  cc_irregularheartbeat: null,
  cc_jawpain: null,
  cc_jointswelling: null,
  cc_kneeinjury: null,
  cc_kneepain: null,
  cc_laceration: null,
  cc_leginjury: null,
  cc_legpain: null,
  cc_legswelling: null,
  cc_lethargy: null,
  cc_lossofconsciousness: null,
  cc_maleguproblem: null,
  cc_mass: null,
  cc_medicalproblem: null,
  cc_medicalscreening: null,
  cc_medicationproblem: null,
  cc_medicationrefill: null,
  cc_migraine: null,
  cc_modifiedtrauma: null,
  cc_motorcyclecrash: null,
  cc_motorvehiclecrash: null,
  cc_multiplefalls: null,
  cc_nasalcongestion: null,
  cc_nausea: null,
  cc_nearsyncope: null,
  cc_neckpain: null,
  cc_neurologicproblem: null,
  cc_numbness: null,
  cc_oralswelling: null,
  cc_otalgia: null,
  cc_other: null,
  "cc_overdose-accidental": null,
  "cc_overdose-intentional": null,
  cc_pain: null,
  cc_palpitations: null,
  cc_panicattack: null,
  cc_pelvicpain: null,
  cc_poisoning: null,
  "cc_post-opproblem": null,
  cc_psychiatricevaluation: null,
  cc_psychoticsymptoms: null,
  cc_rapidheartrate: null,
  cc_rash: null,
  cc_rectalbleeding: null,
  cc_rectalpain: null,
  cc_respiratorydistress: null,
  cc_ribinjury: null,
  cc_ribpain: null,
  "cc_seizure-newonset": null,
  "cc_seizure-priorhxof": null,
  cc_seizures: null,
  cc_shortnessofbreath: null,
  cc_shoulderinjury: null,
  cc_shoulderpain: null,
  cc_sicklecellpain: null,
  cc_sinusproblem: null,
  cc_skinirritation: null,
  cc_skinproblem: null,
  cc_sorethroat: null,
  cc_stdcheck: null,
  cc_strokealert: null,
  cc_suicidal: null,
  "cc_suture/stapleremoval": null,
  cc_swallowedforeignbody: null,
  cc_syncope: null,
  cc_tachycardia: null,
  cc_testiclepain: null,
  cc_thumbinjury: null,
  cc_tickremoval: null,
  cc_toeinjury: null,
  cc_toepain: null,
  cc_trauma: null,
  cc_unresponsive: null,
  cc_uri: null,
  cc_urinaryfrequency: null,
  cc_urinaryretention: null,
  cc_urinarytractinfection: null,
  cc_vaginalbleeding: null,
  cc_vaginaldischarge: null,
  cc_vaginalpain: null,
  cc_weakness: null,
  cc_wheezing: null,
  "cc_withdrawal-alcohol": null,
  cc_woundcheck: null,
  cc_woundinfection: null,
  "cc_woundre-evaluation": null,
  cc_wristinjury: null,
  cc_wristpain: null,
};

const symptoms = new Map([
  ["2ndarymalig", 3],
  ["abdomhernia", 4],
  ["abdomnlpain", 5],
  ["abortcompl", 6],
  ["acqfootdef", 7],
  ["acrenlfail", 8],
  ["acutecvd", 9],
  ["acutemi", 10],
  ["acutphanm", 11],
  ["adjustmentdisorders", 12],
  ["adltrespfl", 13],
  ["alcoholrelateddisorders", 14],
  ["allergy", 15],
  ["amniosdx", 16],
  ["analrectal", 17],
  ["anemia", 18],
  ["aneurysm", 19],
  ["anxietydisorders", 20],
  ["appendicitis", 21],
  ["artembolism", 22],
  ["asppneumon", 23],
  ["asthma", 24],
  ["attentiondeficitconductdisruptivebeha", 25],
  ["backproblem", 26],
  ["biliarydx", 27],
  ["birthasphyx", 28],
  ["birthtrauma", 29],
  ["bladdercncr", 30],
  ["blindness", 31],
  ["bnignutneo", 32],
  ["bonectcncr", 33],
  ["bph", 34],
  ["brainnscan", 35],
  ["breastcancr", 36],
  ["breastdx", 37],
  ["brnchlngca", 38],
  ["bronchitis", 39],
  ["burns", 40],
  ["cardiaarrst", 41],
  ["cardiacanom", 42],
  ["carditis", 43],
  ["cataract", 44],
  ["cervixcancr", 45],
  ["chestpain", 46],
  ["chfnonhp", 47],
  ["chrkidneydisease", 48],
  ["coaghemrdx", 49],
  ["coloncancer", 50],
  ["comabrndmg", 51],
  ["complicdevi", 52],
  ["complicproc", 53],
  ["conduction", 54],
  ["contraceptiv", 55],
  ["copd", 56],
  ["coronathero", 57],
  ["crushinjury", 58],
  ["cysticfibro", 59],
  ["deliriumdementiaamnesticothercognitiv", 60],
  ["developmentaldisorders", 61],
  ["diabmelnoc", 62],
  ["diabmelwcm", 63],
  ["disordersusuallydiagnosedininfancych", 64],
  ["diverticulos", 65],
  ["dizziness", 66],
  ["dminpreg", 67],
  ["dysrhythmia", 68],
  ["earlylabor", 69],
  ["ecodesadverseeffectsofmedicalcare", 70],
  ["ecodesadverseeffectsofmedicaldrugs", 71],
  ["ecodescutpierce", 72],
  ["ecodesdrowningsubmersion", 73],
  ["ecodesfall", 74],
  ["ecodesfirearm", 75],
  ["ecodesfireburn", 76],
  ["ecodesmachinery", 77],
  ["ecodesmotorvehicletrafficmvt", 78],
  ["ecodesnaturalenvironment", 79],
  ["ecodesotherspecifiedandclassifiable", 80],
  ["ecodesotherspecifiednec", 81],
  ["ecodespedalcyclistnotmvt", 82],
  ["ecodesplaceofoccurrence", 83],
  ["ecodespoisoning", 84],
  ["ecodesstruckbyagainst", 85],
  ["ecodessuffocation", 86],
  ["ecodestransportnotmvt", 87],
  ["ecodesunspecified", 88],
  ["ectopicpreg", 89],
  ["encephalitis", 90],
  ["endometrios", 91],
  ["epilepsycnv", 92],
  ["esophcancer", 93],
  ["esophgealdx", 94],
  ["exameval", 95],
  ["eyeinfectn", 96],
  ["fatigue", 97],
  ["femgenitca", 98],
  ["feminfertil", 99],
  ["fetaldistrs", 100],
  ["fluidelcdx", 101],
  ["fuo", 102],
  ["fxarm", 103],
  ["fxhip", 104],
  ["fxleg", 105],
  ["fxskullfac", 106],
  ["gangrene", 107],
  ["gasduoulcer", 108],
  ["gastritis", 109],
  ["gastroent", 110],
  ["giconganom", 111],
  ["gihemorrhag", 112],
  ["giperitcan", 113],
  ["glaucoma", 114],
  ["goutotcrys", 115],
  ["guconganom", 116],
  ["hdnckcancr", 117],
  ["headachemig", 118],
  ["hemmorhoids", 119],
  ["hemorrpreg", 120],
  ["hepatitis", 121],
  ["hivinfectn", 122],
  ["hodgkinsds", 123],
  ["hrtvalvedx", 124],
  ["htn", 125],
  ["htncomplicn", 126],
  ["htninpreg", 127],
  ["hyperlipidem", 128],
  ["immunitydx", 129],
  ["immunizscrn", 130],
  ["impulsecontroldisordersnec", 131],
  ["inducabortn", 132],
  ["infectarth", 133],
  ["influenza", 134],
  ["infmalegen", 135],
  ["intestinfct", 136],
  ["intobstruct", 137],
  ["intracrninj", 138],
  ["jointinjury", 139],
  ["kidnyrnlca", 140],
  ["lateeffcvd", 141],
  ["leukemias", 142],
  ["liveborn", 143],
  ["liveribdca", 144],
  ["longpregncy", 145],
  ["lowbirthwt", 146],
  ["lungexternl", 147],
  ["lymphenlarg", 148],
  ["maintchemr", 149],
  ["malgenitca", 150],
  ["maligneopls", 151],
  ["malposition", 152],
  ["meningitis", 153],
  ["menopausldx", 154],
  ["menstrualdx", 155],
  ["miscellaneousmentalhealthdisorders", 156],
  ["mooddisorders", 157],
  ["mouthdx", 158],
  ["ms", 159],
  ["multmyeloma", 160],
  ["mycoses", 161],
  ["nauseavomit", 162],
  ["neoplsmunsp", 163],
  ["nephritis", 164],
  ["nervcongan", 165],
  ["nonepithca", 166],
  ["nonhodglym", 167],
  ["nutritdefic", 168],
  ["obrelatedperintrauma", 169],
  ["opnwndextr", 170],
  ["opnwndhead", 171],
  ["osteoarthros", 172],
  ["osteoporosis", 173],
  ["otacqdefor", 174],
  ["otaftercare", 175],
  ["otbnignneo", 176],
  ["otbonedx", 177],
  ["otcirculdx", 178],
  ["otcomplbir", 179],
  ["otconganom", 180],
  ["otconntiss", 181],
  ["otdxbladdr", 182],
  ["otdxkidney", 183],
  ["otdxstomch", 184],
  ["otendodsor", 185],
  ["otfemalgen", 186],
  ["othbactinf", 187],
  ["othcnsinfx", 188],
  ["othematldx", 189],
  ["othercvd", 190],
  ["othereardx", 191],
  ["otheredcns", 192],
  ["othereyedx", 193],
  ["othergidx", 194],
  ["othergudx", 195],
  ["otherinjury", 196],
  ["otherpregnancyanddeliveryincludingnormal", 197],
  ["otherscreen", 198],
  ["othfracture", 199],
  ["othheartdx", 200],
  ["othinfectns", 201],
  ["othliverdx", 202],
  ["othlowresp", 203],
  ["othmalegen", 204],
  ["othnervdx", 205],
  ["othskindx", 206],
  ["othveindx", 207],
  ["otinflskin", 208],
  ["otitismedia", 209],
  ["otjointdx", 210],
  ["otnutritdx", 211],
  ["otperintdx", 212],
  ["otpregcomp", 213],
  ["otprimryca", 214],
  ["otrespirca", 215],
  ["otupprresp", 216],
  ["otuprspin", 217],
  ["ovariancyst", 218],
  ["ovarycancer", 219],
  ["pancreascan", 220],
  ["pancreasdx", 221],
  ["paralysis", 222],
  ["parkinsons", 223],
  ["pathologfx", 224],
  ["pelvicobstr", 225],
  ["perintjaund", 226],
  ["peripathero", 227],
  ["peritonitis", 228],
  ["personalitydisorders", 229],
  ["phlebitis", 230],
  ["pid", 231],
  ["pleurisy", 232],
  ["pneumonia", 233],
  ["poisnnonmed", 234],
  ["poisnotmed", 235],
  ["poisonpsych", 236],
  ["precereoccl", 237],
  ["prevcsectn", 238],
  ["prolapse", 239],
  ["prostatecan", 240],
  ["pulmhartdx", 241],
  ["rctmanusca", 242],
  ["rehab", 243],
  ["respdistres", 244],
  ["retinaldx", 245],
  ["rheumarth", 246],
  ["schizophreniaandotherpsychoticdisorde", 247],
  ["screeningandhistoryofmentalhealthan", 248],
  ["septicemia", 249],
  ["septicemiaexceptinlabor", 250],
  ["sexualinfxs", 251],
  ["shock", 252],
  ["sicklecell", 253],
  ["skininfectn", 254],
  ["skinmelanom", 255],
  ["sle", 256],
  ["socialadmin", 257],
  ["spincorinj", 258],
  ["spontabortn", 259],
  ["sprain", 260],
  ["stomchcancr", 261],
  ["substancerelateddisorders", 262],
  ["suicideandintentionalselfinflictedin", 263],
  ["superficinj", 264],
  ["syncope", 265],
  ["teethdx", 266],
  ["testiscancr", 267],
  ["thyroidcncr", 268],
  ["thyroiddsor", 269],
  ["tia", 270],
  ["tonsillitis", 271],
  ["tuberculosis", 272],
  ["ulceratcol", 273],
  ["ulcerskin", 274],
  ["umbilcord", 275],
  ["unclassified", 276],
  ["urinstone", 277],
  ["urinyorgca", 278],
  ["uteruscancr", 279],
  ["uti", 280],
  ["varicosevn", 281],
  ["viralinfect", 282],
  ["whtblooddx", 283],
  ["cc_abdominalcramping", 284],
  ["cc_abdominaldistention", 285],
  ["cc_abdominalpain", 286],
  ["cc_abdominalpainpregnant", 287],
  ["cc_abnormallab", 288],
  ["cc_abscess", 289],
  ["cc_addictionproblem", 290],
  ["cc_agitation", 291],
  ["cc_alcoholintoxication", 292],
  ["cc_alcoholproblem", 293],
  ["cc_allergicreaction", 294],
  ["cc_alteredmentalstatus", 295],
  ["cc_animalbite", 296],
  ["cc_ankleinjury", 297],
  ["cc_anklepain", 298],
  ["cc_anxiety", 299],
  ["cc_arminjury", 300],
  ["cc_armpain", 301],
  ["cc_armswelling", 302],
  ["cc_assaultvictim", 303],
  ["cc_asthma", 304],
  ["cc_backpain", 305],
  ["cc_bleeding/bruising", 306],
  ["cc_blurredvision", 307],
  ["cc_bodyfluidexposure", 308],
  ["cc_breastpain", 309],
  ["cc_breathingdifficulty", 310],
  ["cc_breathingproblem", 311],
  ["cc_burn", 312],
  ["cc_cardiacarrest", 313],
  ["cc_cellulitis", 314],
  ["cc_chestpain", 315],
  ["cc_chesttightness", 316],
  ["cc_chills", 317],
  ["cc_coldlikesymptoms", 318],
  ["cc_confusion", 319],
  ["cc_conjunctivitis", 320],
  ["cc_constipation", 321],
  ["cc_cough", 322],
  ["cc_cyst", 323],
  ["cc_decreasedbloodsugar-symptomatic", 324],
  ["cc_dehydration", 325],
  ["cc_dentalpain", 326],
  ["cc_depression", 327],
  ["cc_detoxevaluation", 328],
  ["cc_diarrhea", 329],
  ["cc_dizziness", 330],
  ["cc_drug/alcoholassessment", 331],
  ["cc_drugproblem", 332],
  ["cc_dyspnea", 333],
  ["cc_dysuria", 334],
  ["cc_earpain", 335],
  ["cc_earproblem", 336],
  ["cc_edema", 337],
  ["cc_elbowpain", 338],
  ["cc_elevatedbloodsugar-nosymptoms", 339],
  ["cc_elevatedbloodsugar-symptomatic", 340],
  ["cc_emesis", 341],
  ["cc_epigastricpain", 342],
  ["cc_epistaxis", 343],
  ["cc_exposuretostd", 344],
  ["cc_extremitylaceration", 345],
  ["cc_extremityweakness", 346],
  ["cc_eyeinjury", 347],
  ["cc_eyepain", 348],
  ["cc_eyeproblem", 349],
  ["cc_eyeredness", 350],
  ["cc_facialinjury", 351],
  ["cc_faciallaceration", 352],
  ["cc_facialpain", 353],
  ["cc_facialswelling", 354],
  ["cc_fall", 355],
  ["cc_fall>65", 356],
  ["cc_fatigue", 357],
  ["cc_femaleguproblem", 358],
  ["cc_fever", 359],
  ["cc_fever-75yearsorolder", 360],
  ["cc_fever-9weeksto74years", 361],
  ["cc_feverimmunocompromised", 362],
  ["cc_fingerinjury", 363],
  ["cc_fingerpain", 364],
  ["cc_fingerswelling", 365],
  ["cc_flankpain", 366],
  ["cc_follow-upcellulitis", 367],
  ["cc_footinjury", 368],
  ["cc_footpain", 369],
  ["cc_footswelling", 370],
  ["cc_foreignbodyineye", 371],
  ["cc_fulltrauma", 372],
  ["cc_generalizedbodyaches", 373],
  ["cc_gibleeding", 374],
  ["cc_giproblem", 375],
  ["cc_groinpain", 376],
  ["cc_hallucinations", 377],
  ["cc_handinjury", 378],
  ["cc_handpain", 379],
  ["cc_headache", 380],
  ["cc_headache-newonsetornewsymptoms", 381],
  ["cc_headache-recurrentorknowndxmigraines", 382],
  ["cc_headachere-evaluation", 383],
  ["cc_headinjury", 384],
  ["cc_headlaceration", 385],
  ["cc_hematuria", 386],
  ["cc_hemoptysis", 387],
  ["cc_hippain", 388],
  ["cc_homicidal", 389],
  ["cc_hyperglycemia", 390],
  ["cc_hypertension", 391],
  ["cc_hypotension", 392],
  ["cc_influenza", 393],
  ["cc_ingestion", 394],
  ["cc_insectbite", 395],
  ["cc_irregularheartbeat", 396],
  ["cc_jawpain", 397],
  ["cc_jointswelling", 398],
  ["cc_kneeinjury", 399],
  ["cc_kneepain", 400],
  ["cc_laceration", 401],
  ["cc_leginjury", 402],
  ["cc_legpain", 403],
  ["cc_legswelling", 404],
  ["cc_lethargy", 405],
  ["cc_lossofconsciousness", 406],
  ["cc_maleguproblem", 407],
  ["cc_mass", 408],
  ["cc_medicalproblem", 409],
  ["cc_medicalscreening", 410],
  ["cc_medicationproblem", 411],
  ["cc_medicationrefill", 412],
  ["cc_migraine", 413],
  ["cc_modifiedtrauma", 414],
  ["cc_motorcyclecrash", 415],
  ["cc_motorvehiclecrash", 416],
  ["cc_multiplefalls", 417],
  ["cc_nasalcongestion", 418],
  ["cc_nausea", 419],
  ["cc_nearsyncope", 420],
  ["cc_neckpain", 421],
  ["cc_neurologicproblem", 422],
  ["cc_numbness", 423],
  ["cc_oralswelling", 424],
  ["cc_otalgia", 425],
  ["cc_other", 426],
  ["cc_overdose-accidental", 427],
  ["cc_overdose-intentional", 428],
  ["cc_pain", 429],
  ["cc_palpitations", 430],
  ["cc_panicattack", 431],
  ["cc_pelvicpain", 432],
  ["cc_poisoning", 433],
  ["cc_post-opproblem", 434],
  ["cc_psychiatricevaluation", 435],
  ["cc_psychoticsymptoms", 436],
  ["cc_rapidheartrate", 437],
  ["cc_rash", 438],
  ["cc_rectalbleeding", 439],
  ["cc_rectalpain", 440],
  ["cc_respiratorydistress", 441],
  ["cc_ribinjury", 442],
  ["cc_ribpain", 443],
  ["cc_seizure-newonset", 444],
  ["cc_seizure-priorhxof", 445],
  ["cc_seizures", 446],
  ["cc_shortnessofbreath", 447],
  ["cc_shoulderinjury", 448],
  ["cc_shoulderpain", 449],
  ["cc_sicklecellpain", 450],
  ["cc_sinusproblem", 451],
  ["cc_skinirritation", 452],
  ["cc_skinproblem", 453],
  ["cc_sorethroat", 454],
  ["cc_stdcheck", 455],
  ["cc_strokealert", 456],
  ["cc_suicidal", 457],
  ["cc_suture/stapleremoval", 458],
  ["cc_swallowedforeignbody", 459],
  ["cc_syncope", 460],
  ["cc_tachycardia", 461],
  ["cc_testiclepain", 462],
  ["cc_thumbinjury", 463],
  ["cc_tickremoval", 464],
  ["cc_toeinjury", 465],
  ["cc_toepain", 466],
  ["cc_trauma", 467],
  ["cc_unresponsive", 468],
  ["cc_uri", 469],
  ["cc_urinaryfrequency", 470],
  ["cc_urinaryretention", 471],
  ["cc_urinarytractinfection", 472],
  ["cc_vaginalbleeding", 473],
  ["cc_vaginaldischarge", 474],
  ["cc_vaginalpain", 475],
  ["cc_weakness", 476],
  ["cc_wheezing", 477],
  ["cc_withdrawal-alcohol", 478],
  ["cc_woundcheck", 479],
  ["cc_woundinfection", 480],
  ["cc_woundre-evaluation", 481],
  ["cc_wristinjury", 482],
  ["cc_wristpain", 483],
]);

function handleSearchBox() {
  const symptomSearchBox = document.getElementById("symptom-search-box");
  if (!symptomSearchBox) {
    throw new Error("Failed to find element(1)");
  }

  const rows = document.querySelectorAll("tr");
  const searchTerm = symptomSearchBox.value.toLowerCase(); // Get the search term

  rows.forEach((row) => {
    if (
      row.parentElement.id === "DemoTableHead" ||
      row.parentElement.id === "DemoTableBody"
    ) {
      return;
    }

    const cells = row.children;

    let matchFound = false;
    for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      const cellText = cells[cellIndex].textContent.toLowerCase();
      if (cellText.includes(searchTerm)) {
        matchFound = true;
        break;
      }
    }

    row.style.display = matchFound ? "" : "none"; // Show or hide the row
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const symptomSearchBox = document.getElementById("symptom-search-box");
  if (!symptomSearchBox) {
    throw new Error("Failed to get element(1)");
  }
  symptomSearchBox.addEventListener("input", handleSearchBox);

  const availableSymptomsTable = document.getElementById(
    "available-symptoms-table-body"
  );
  if (!availableSymptomsTable) {
    throw new Error("Failed to get element(2)");
  }

  const activeSymptomsTable = document.getElementById(
    "active-symptoms-table-body"
  );
  if (!activeSymptomsTable) {
    throw new Error("Failed to get element(3)");
  }

  symptoms.forEach((value, key) => {
    const row = document.createElement("tr");
    const td = document.createElement("td");

    td.classList.add("symptom");
    td.innerText = key;
    td.id = "symptom-" + value;

    row.addEventListener("click", () => {
      if (row.parentElement == availableSymptomsTable) {
        activeSymptomsTable.appendChild(row);
      } else {
        availableSymptomsTable.appendChild(row);
      }
    });

    row.appendChild(td);
    availableSymptomsTable.appendChild(row);
  });
});

function getCSVFromOptions(optionMap) {
  // Convert the map of options into CSV format
  const headers = Object.keys(optionMap).join(","); // Create the header row
  const values = Object.values(optionMap).join(","); // Create the value row

  // Combine the headers and values into CSV string
  const csvData = `${headers}\n${values}`;

  return csvData;
}

document.addEventListener("DOMContentLoaded", function () {
  let csvData = null;

  const vitalsSelectValue = document.getElementById("vitalsSelect");
  const csvUploadButton = document.getElementById("uploadButton");
  const addPatientButton = document.getElementById("add-patient");
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".csv";

  vitalsSelectValue.addEventListener("change", function () {
    switch (vitalsSelectValue.value) {
      case "patient-vitals-1":
        const optionMap1 = {
          triage_vital_hr: 63.0,
          triage_vital_rr: 18.0,
          triage_vital_sbp: 146.0,
          triage_vital_dbp: 85.0,
          triage_vital_o2: 97.0,
          triage_vital_temp: 97.0,
        };
        csvData = getCSVFromOptions(optionMap1);
        break;
      case "patient-vitals-2":
        const optionMap2 = {
          triage_vital_hr: 78.0,
          triage_vital_rr: 16.0,
          triage_vital_sbp: 134.0,
          triage_vital_dbp: 78.0,
          triage_vital_o2: 97.0,
          triage_vital_temp: 97.8,
        };
        csvData = getCSVFromOptions(optionMap2);
        break;
      default: {
        break;
      }
    }
  });

  if (csvUploadButton) {
    csvUploadButton.addEventListener("click", function () {
      vitalsSelectValue.value = "upload";
      fileInput.click();
    });

    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const content = e.target.result;
          const lines = content.split("\n");
          if (lines.length > 0) {
            const headers = lines[0].split(",");
            const values = lines[1].split(",");
            csvData = {};
            for (let i = 0; i < headers.length; i++) {
              csvData[headers[i].trim()] = values[i].trim();
            }
            console.log("CSV Data loaded:", csvData);
            csvUploadButton.textContent = file.name;
            //csvUploadButton.disabled = true;
          } else {
            console.log("The CSV file is empty.");
            alert("The CSV file is empty. Please upload a valid file.");
          }
        };
        reader.readAsText(file);
      }
    });
  } else {
    console.error("Element with id 'vitals' not found");
  }

  if (addPatientButton) {
    addPatientButton.addEventListener("click", async function () {
      const age = document.getElementById("numberInput").value;
      const patientName = document.getElementById("patient-name").value;
      const gender = document.getElementById("gender").value;

      // Validation checks
      if (!csvData) {
        alert("Please upload a CSV file first.");
        return;
      }
      if (!age) {
        alert("Please enter the patient's age.");
        return;
      }
      if (!patientName) {
        alert("Please enter the patient's name.");
        return;
      }
      if (!gender) {
        alert("Please select the patient's gender.");
        return;
      }

      // Get symptoms from the table
      const symptomsData = getSymptomsFromTable();

      // All checks passed, combine the data
      const combinedData = {
        ...csvData,
        age: age,
        gender: gender,
        ...symptomsData,
      };

      // Transfer data to edDataKeys
      const updatedEdData = transferToEdDataKeys(combinedData);

      console.log("Updated ED Data:", updatedEdData);
      console.log(updatedEdData.length);

      const demoTableElement = document.getElementById("DemoTableBody");
      const tr = document.createElement("tr");
      const td_name = document.createElement("td");
      td_name.innerText = patientName;
      const td_ESI = document.createElement("td");
      const edData = await requestESIPrediction(updatedEdData);
      td_ESI.innerText = edData;
      const td_details = document.createElement("td");
      const button_details = document.createElement("button");
      button_details.classList.add("button-primary");
      button_details.innerText = "View Details";
      button_details.addEventListener("click", () => {
        // Create a new div for the popup
        const popup = document.createElement("div");
        popup.id = "popupOverlay";

        // Style the popup to cover the whole screen and center the content
        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100vw";
        popup.style.height = "100vh";
        popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Semi-transparent black
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "1000"; // Ensure it's on top of all content

        // Create content for the popup (e.g., text or button)
        const popupContent = document.createElement("div");
        popupContent.style.backgroundColor = "#1e1e1e";
        popupContent.style.padding = "20px";
        popupContent.style.borderRadius = "8px";
        popupContent.style.width = "80%"; // Adjust width to ensure it is large enough
        popupContent.style.maxHeight = "80vh"; // Limit height to 80% of the viewport height
        popupContent.style.overflowY = "auto"; // Enable vertical scrolling if content overflows

        // Add the content, including patient details and symptom data
        popupContent.innerHTML = `
          <h2 class="font-bold text-xl" style="color: #e4eaf0;">${patientName}'s details</h2>
          <p class="text-gray-400">Urgency: ${edData}</p>
        `;

        // Add the updatedEdData values that are not 0
        Object.entries(updatedEdData).forEach(([key, value]) => {
          if (value !== 0) {
            const p = document.createElement("p");
            p.classList.add("text-gray-400");
            p.textContent = `${key}: ${value}`; // Create <p> element with the key and value
            popupContent.appendChild(p); // Append the <p> element to the popup content
          }
        });

        const button = document.createElement("button");
        button.classList.add("button-primary");
        button.id = "closePopup";
        button.innerText = "Close Details";
        popupContent.appendChild(button);

        popup.appendChild(popupContent);

        // Append popup to the body
        document.body.appendChild(popup);

        // Add event listener to close the popup
        document.getElementById("closePopup").addEventListener("click", () => {
          popup.remove(); // Remove the popup when close button is clicked
        });
      });

      td_details.appendChild(button_details);

      tr.appendChild(td_name);
      tr.appendChild(td_ESI);
      tr.appendChild(td_details);
      demoTableElement.appendChild(tr);

      csvUploadButton.textContent = "Upload CSV";
      document.getElementById("numberInput").value = "";
      // Set the value of the input field
      document.getElementById("patient-name").value = "";

      csvUploadButton.disabled = false;
      clearSymptomsTable();
    });
  } else {
    console.error("Element with id 'add-patient' not found");
  }

  function getSymptomsFromTable() {
    const symptomsTableBody = document.getElementById(
      "active-symptoms-table-body"
    );
    const symptoms = {};

    if (symptomsTableBody) {
      const rows = symptomsTableBody.getElementsByTagName("tr");
      for (let row of rows) {
        const symptomName = row.textContent.trim();
        symptoms[symptomName] = 1;
      }
    }
    console.log("[][]: " + symptoms);

    return symptoms;
  }

  function clearSymptomsTable() {
    const symptomsTableBody = document.getElementById(
      "active-symptoms-table-body"
    );
  }

  function transferToEdDataKeys(combinedData) {
    const updatedEdData = { ...edDataKeys };

    for (let key in updatedEdData) {
      if (combinedData.hasOwnProperty(key)) {
        updatedEdData[key] = combinedData[key];
      } else {
        updatedEdData[key] =
          updatedEdData[key] === null ? 0 : updatedEdData[key];
      }
    }

    return updatedEdData;
  }
});

async function requestESIPrediction(patientData) {
  const apiUrl = "http://127.0.0.1:8000/api/model/predict/"; // Replace with your actual API endpoint

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("ESI Prediction:", result.esi_scores[0]);
    return result.esi_scores[0];
  } catch (error) {
    console.error("Error requesting ESI prediction:", error);
    throw error;
  }
}
