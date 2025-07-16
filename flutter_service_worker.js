'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1992e1ce332e888666d55c63222bcb4b",
".git/config": "60d6bc3185b9a739e1332fd0064810f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9ee6e00859180e757bb4eacc68c8a29d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23b0ebe33fbd77e33ecff921efaf814e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7925a52a04949fa7dffacab4784d8722",
".git/logs/refs/heads/main": "b8863ea043ccb0f8633eefffed0965d6",
".git/logs/refs/remotes/origin/main": "a212e70b826906d22605adeb751df388",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/c5f7bf302d4a7a75c2052364f48e2d52896849": "6fae9a517492c55f4b5f71dc15e68411",
".git/objects/04/75bd963eb0fc212be2cff8a249e286ddcca0f5": "41c0d2ade56e0bdf82b7ccb0c6171147",
".git/objects/06/4028a09d47776edd4dfbbbb13f9e74a8af1abd": "0b7e3e8400f47e31ec16daa6bf508bac",
".git/objects/06/e92a67dc5b4661f4ea032d78c368455ad8c428": "71af1d9b3eca3a7d2d775250dc57376b",
".git/objects/0a/2cab7843739e7b76cff09d93f7ba00923ff3cc": "2ecdafce009ff37af2e390d925ce4b42",
".git/objects/0b/353e78ff272368798f26234fc8b79005d65770": "231ea57fd4275e0d92415ebc76fc4d8b",
".git/objects/10/1e38947b458d23309192889462ed53e33a3675": "10fcff7060ea3e6b40bab30474b2c838",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/11/1ee00656b606b5f6052f4e1f473dda63ff92fb": "c76cd967bd112c38725e56c4b5556c08",
".git/objects/12/801f165c89365d74591507e539eca0fc7d4993": "17cd2e3cdf163291404ea97f2cbe6fce",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/17/057a2bf7ab4bbc33ab2c291ecb29becf0086cd": "951b55187715cd1be96f9d5be8e04450",
".git/objects/19/038162f1345f43f1daa7d532b277a29a5bc070": "4780023fe5afb6511b147e7b030eb261",
".git/objects/19/66e1c18ff25cf188b07318cd22d5d978741cef": "06d040474f269b9b223a809211e7e41d",
".git/objects/1c/60b5c8a3d7cd6ba0af13875919666cfa43af10": "41e026bfc339d81f110ae0f7a2822668",
".git/objects/1c/63e7ff951482d758aa6ab8eb4d4a16939db4d8": "18e03e2027671edaa304c6013ca7b91f",
".git/objects/1c/d6692f14363ebbb2c322b44a87181d36a1e727": "4f352c6258b57d3cc9bf0a4d57f5068b",
".git/objects/1f/0609a6400a781249b6ea72a58010509751e8c2": "1ca387a01c7a01b32332318ca767939c",
".git/objects/1f/0a1420a00568dfb5874346c13b46f7fb2bb14d": "03ce9658c768dabd225408604be5b94e",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/fc87fd7858756825b0ee35d5de11e8ee93ab72": "3bfb8722ee80d30b8cc7129fc3b83949",
".git/objects/29/3c29bc5a7169d7e09b9cdcec3c0ad6a6ea29b0": "ccfcfdfa1b7cfc7b427c8ed0753b393d",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/30/5f7797a57f4c2f6c5e12061dc130821d0a6405": "f02d3004239f78e13dbf48df995c3015",
".git/objects/31/39dc7cf301ea55d8f5e781d98d5c58a6ee1ccd": "e26ff2b827306e1115fe3796b3329bdc",
".git/objects/32/699d19c3d8c3bf0e12062e5c6e834c1553def2": "965036e54d79b7745d17bd96ab7b2c5b",
".git/objects/32/6b57205c670a9eed009bb550964d964517582f": "071be98de194c703a11cf40a89581b74",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/35/66557631bf0154a30fe54aebf1563782abe33d": "972e8bc63d1f4860fba36afb6c592c14",
".git/objects/35/9ee63157b93e861fcdb3cb9177a36a77fe0446": "23c4ab408a544ab60ad6f84953213e8a",
".git/objects/36/1427a86770f492f8edfde73488d901995b5535": "b0b6949ede4b74f93f05732831b75b53",
".git/objects/36/22be14d89ad484dda41d86584e7fb4925beb8e": "fd4c2850a873319c6ea8a244421c600b",
".git/objects/39/17d19395a387023b88f9d1e9c6ae818e175b5c": "df746a2c44a2b59ca1026ed363dcf31c",
".git/objects/3a/22d096127fcc40c670ec372715f4c118add304": "20024c4b2823f9f7dfc5956fae5e36db",
".git/objects/3b/2bcf0a94f5a614864d06a6818c5a70f4760d19": "dd9c84b12893258db44481e5b00360df",
".git/objects/3c/38f510d6227e6085e190e1898125d12a71e5c1": "90fac2eecdb35902580fab85efcb6f2b",
".git/objects/3c/5936e482a9155f8d53cc276390d25c9af9e26b": "ba3a82f5cd87e625f64d2fd38195a4db",
".git/objects/3e/3230334fd9fb6b98b4a0a678e4e8880e72927b": "1cd98e43e8179c03384fb4e35aced5cd",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/cfd07c20e14cbf50d9f1a33d1f9e55b10eb7e5": "98e54f04e0e9d96e9a2f62878b333191",
".git/objects/41/119db21a51e0cdf297caf4f24cbb77ffc908ad": "7a717e7c38601dfa6cf0a70064f0595f",
".git/objects/44/2a25d41d693200d2f1c2e81f347132d7227f1c": "a6579cc27b9b75f4ab5537a92dcc36e9",
".git/objects/44/8a5615d198b3daa8aba5ac5ac2e62060c92fd2": "ef4cb716d65611887edd7ef26701e118",
".git/objects/46/443796e7bb173aec0681c542d2ad6fe1678f42": "5be2b394dce72ce7d4816ac4f784430e",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/49/c28b961ada2acc4056bd9fcf67ba5e6077bcbe": "4c3f03953e3133d2ea5939399071ea3a",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/0d70168a5dcf070a538feb1fa2aba13ffed51a": "4c25fbe6450d01790fbbff508ffba709",
".git/objects/4d/db699479615a3220b649bc55dd939c5a38be0a": "68bd42ae7b0f8a058e7edb7eac356b27",
".git/objects/50/8e73bad951d4a46c46e4757b78ec8f56d963a3": "b678e7155051506a14df389ee32b940a",
".git/objects/52/05db3466b142cccb46b7f4aba0aac60573ec09": "38e7511f0158d4e226711943bdb22e8c",
".git/objects/54/04628b463ea5f409d49e7f1b0d4c1a7d4cc74d": "7ffc5dbba59414e9707e7dfd3abfe826",
".git/objects/54/3b8333da251804fff7c8c4dd266804533f3be5": "164aa9f8103196edf75f17137caaf599",
".git/objects/54/7a4a38f77cc29988cbd50e7f26a452b836007b": "6214cb9da5f86dcba548de588c108f5c",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/6695548aa3869bfe77f251933985ad9d9b1c2f": "f1428330e01ccde28d2a11fbfb4b688e",
".git/objects/5b/29143f5c417cd66397caa42351588cc4e9661c": "3e150539a375f8a7f6206be87fcd6ba4",
".git/objects/5c/74454b9b0ad2f387f63d667cf8143fb2a7a2f6": "d34dcf46dd75adf0db51e2cb048a9ada",
".git/objects/5d/5b189d1de6b446d15498fb13e1c293b5a97d76": "e88721d0e1b96d5c10f31b2d1f65a30e",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/78148996adcee7c20e15b8ae5925b8c8fb1002": "fcbbbdd9625b48bc06ea6f8217f7f950",
".git/objects/60/64aa4abaca769f49298c5caa2c383ea7c03cec": "670df19ce8f610e87a103c2af75b72db",
".git/objects/60/f3fd201ed3be4a2cdd2cf165507b3ebeb4e53c": "672edc8ac9dbc758bd413ee804c2c3d1",
".git/objects/60/fa4eb89031ca323d085577d018b372b94cf9cd": "3e148e64b23c3426136bfb0a8069d737",
".git/objects/62/f8a21020c2d714499a89520e78b237e025c2bf": "77ffe7f8bb36fbc9ad2d3e869be85fbc",
".git/objects/63/7ae16387265130730cdd1f9ce220974a6043e7": "7088ccfb14fdc4e3e01f5c2b8939ff4d",
".git/objects/64/34cd466366d8f7e92e947ddb7ee33a5da52d92": "3a8973af5e37bfdc6eb77271df4ece89",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/68/d099b5e3f90713bab99d3c9159ddce3d107448": "8e5d06515d0ea1e6a434d7f38c3db33d",
".git/objects/6b/0020c8c69cac9c1e71ed6b4dde6ff347d10b7c": "30944b6713d04f3d3d9182f3140a3242",
".git/objects/6b/bdeaa281e7eeeeb29e60cfd357b226b07bfd58": "d37fa853f5d5f27842489fc60073f6eb",
".git/objects/6b/ef91785268f0ca4fc40b0d194ec0f2e3171e96": "8421edf6bd7affc0b6bd0884a2af5189",
".git/objects/6c/8f5b2490d89242eba12aeac363c16bdd663f36": "f8766153e016b4fa8ad65ca21d1ce73f",
".git/objects/6f/2cc863137b9679bb448564591576347df0c4af": "a9662878c99f80cb824cf4d3369d3eba",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/dac93202667911a81b498bbc2fe1641bece6e5": "f10e5ac54610a371b7e30787f39a56d4",
".git/objects/71/0e1114ccc03ef68927496a94800151ed503474": "e691f2e33adefb2030b51bb1fafec9ab",
".git/objects/72/f417ec5a143e910099421962d0fcf0e5f70397": "876df7c00dcfdf13a0f3df33c8463375",
".git/objects/76/dd5c71d73fb0c63c7a0fa4495b6d60fd317dd3": "36f66e0df344f164a51c24fd371a3b01",
".git/objects/78/93ad2126cfe9092b638210b9e8463dfe78a1f4": "febd4393fab53b0db8eb0eae42db0d2d",
".git/objects/79/1f8cc9f67cd85cbaaf42eb6aad7bf7e79d3d81": "7b19a5a686811a171d8aa0d6df977838",
".git/objects/7a/4898945e9cfe04f3fb52ac3263875624df4d41": "2d64b28d42eaa693088f9f67fd440c4f",
".git/objects/7a/a72379d454f2665c385c8fe243c818a4dc6d0e": "d606711b8d4e500304363c72215fb40e",
".git/objects/7c/8bcd71d39d003848e476359922848265b9e952": "ba28f86f239e5ffbe0dc99372f9b65df",
".git/objects/7e/6cfdd947951e577370dc8ba5bc5e0310377f7a": "2f865380d54619757e58001a4806324e",
".git/objects/7f/395afb5607d0075914caa481500ce611d9c875": "d7d2ae84758e7765788698e1e443a3f7",
".git/objects/81/3fd012e9b6ac2d52f4d925fb7e894c1ed24828": "ce99a184db6d5d84c05fa1e5985b84e6",
".git/objects/81/eec9a9fd7b6a14c56bf5202c92127fbfb1b6b1": "8a2f90aa9fd5053664f3391a5ad4b6aa",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/8cd2e331f03169169e033e278faf22954ab8e5": "8e1d12c19dedd33a1277aeb03791dea7",
".git/objects/83/c623e2217c95fcf9887915af1c07f57cb57929": "f9bbc1588c7212f9a59016ddc4b50c4f",
".git/objects/86/931598745b92fbea63e28269d296a3385a1b3b": "d4f866c9ed48e871b9305d1251446cec",
".git/objects/88/a16e4ef5ddc3d661bfdeeadb0a51ee6717bb83": "95647b512915832a72f3dc2eb9e8a158",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b411e8c90af15aa6ef9b138f431eb9b1b10822": "0488ea06972386e820981f2531f61834",
".git/objects/8c/0c2ebfc61c574410efb554e1f04ebd8890fc14": "72f25b9305e2259b42da311310b3ee6b",
".git/objects/8c/1d79a9d0fb76df2288f5ef09ebbf446c7d97d0": "2eb44f755fea7968adee8258169cae8c",
".git/objects/8c/304c3cf0c9c1e264996170adc72a127b801668": "6850e8114745743e50e30940aa3e3438",
".git/objects/8c/39dabc9ee913f502d6f8834484189b909f60fa": "bf7e8fc03b9ec60a69a1caceb8315461",
".git/objects/8d/658c71c10b6753880c715ebc563b9a25b937b3": "068e99718477b7be40160a7bc30444d8",
".git/objects/8e/8b341f02a09a99b8e35199b6d9fd97e591c3b1": "41e5a7679333cc78bd6b67a1c093d77c",
".git/objects/8f/4b432a852e0aacaac7accddc912eb6b5bb6139": "1fad4f74274c9e6a268bb661573d97ea",
".git/objects/8f/7a4bb2ee744c29a7d82a10f28cad87b61d9d72": "13157b3ecbadb6ebb6fb7ec2a2b3d8a9",
".git/objects/90/f9fb99686b36d227f591f7f0fe380d6a674a56": "70e527186b347bfde5210de13ec502d2",
".git/objects/93/00891151f2f9fa517547b32288c9a859b37cc9": "88818f406090f736c33e63c083035041",
".git/objects/97/57f5722dfebfa0df3f7334b2ab1b14e1acb01f": "7a3af79fdbb3da0d36d6ccd2c3ce1030",
".git/objects/99/1a0d59878382990ee3842e982eedb38eea34ac": "f9c961a321ff91d73ea1b0304daa3761",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/95477f0ea507f025af9999781154535f28072b": "77d0b566c6e28d2a1900475feeb8294b",
".git/objects/9e/9d1a9a2f8d577d53f58465ce731562cc9375a5": "806bad6d931d5823b7619303bec03701",
".git/objects/9e/e47b30c84aa3066917aee011032be6c94d6d73": "d41a95f8637510d7033cd53d13675d82",
".git/objects/a0/25da0708d089adbed0b6d0aea6eb7729224a36": "a9f829d92ebfcb6f8a189661f66d73e2",
".git/objects/a0/b69a841f674f2bc0fa2da4e487e22377ed4e21": "c22dfc14de281679d62bf8c2079258c1",
".git/objects/a1/898d1a974c24e4a089941e8b0eb9ebcc6f164f": "7862d6c74edc77beff116264dc261d94",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/bc001b525c324dc1f4e8b109234e0994350869": "29553f7609a8371557d4c703962e328b",
".git/objects/a6/24e611992ef8000dc4be37aee90225845b4af1": "dfe187a9b07dc729a0e5b00f17eafea2",
".git/objects/a6/2dac2ca8af897ed1d1cf6f2d59102278975707": "f6f733019afacfdc434353aed82686a4",
".git/objects/a6/41927c5926d1efb357476c3490672fa1cb2c20": "cb18f8ea08410c9d27b1487cfaf14ae9",
".git/objects/a7/0867d189b6358225e51f7e42a978e25ee2912b": "0a1161567fdcaef0afeb8d6abab30a2b",
".git/objects/a8/95557e318fd63a47ee15cf40b78fb4c7d76fff": "c88e77060ae62dccbb19d17b2319b279",
".git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
".git/objects/aa/3dab16faf2c236b09b602f83023863360a7986": "7e091a54af68c8092d00d15cc5b884cb",
".git/objects/aa/b299a29590e04be0413ab24e2f01cc6e77f66e": "70dd4e82837579c24cb6fcb064e13430",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ad/1e0d310c581ef7c0a2bd3e803969c5c6ec1118": "3f0bd2f47bbdf8aa72419f33cd060c98",
".git/objects/ad/2615f52d9efc0c8f2fd80f40e9b3c8d29324fc": "5713f1da12465f0be37cdbe2c8acece1",
".git/objects/b0/a43614d70ec96d538c97be3eddf8bc4e98a0b7": "f8981dcaf629a78645f3af3d2f8ae5c2",
".git/objects/b2/f42043eec83103752af23e5dcf0558aa3bd795": "bf780f7a7add3fae7382c7c82d3b9c06",
".git/objects/b3/5a4f913a212516ce3e59a67e362f3012d51987": "688c7377bc3a4cc4b4a3d6e6c093a366",
".git/objects/b4/095abfb7beb548b26a94ccd1655178566bd77a": "5f34683706861a35127133cab5c421f3",
".git/objects/b6/0d9fdd6f854498f60995334aa6ace0e4e11263": "d047e4ab6edf39b7a55dd0831241ac69",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a25f32d538c58a7e1fd8776860c633b9ecee1e": "75c5ca8016008f8a08317cb874431115",
".git/objects/b9/0e589255d29b6923290d5cf75da2aa70654a6e": "3e3b5bfbe7df7b16eee05289a498bc69",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/64933b73b92a95c8a85163d924aab9e014aefb": "3bd2a27b3bda210033a243898756f771",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/bb8f5f37d1b3f4d282870c3fce91182f450824": "badb3274a35bb7e75b42c227010572af",
".git/objects/bf/7d89f78dd5ebd55088125d512114e9cf1645a6": "089baefd2630b97f032ec492f94f02a0",
".git/objects/c0/5a34e05bb8525d024da88f07a3cb760d79a726": "4ef14162be95a93f1ae1c64119b5b7f2",
".git/objects/c0/dd7704563f85196aaa7bb3b359893e17497035": "208a48a33ec1c40510961491eb8b5a25",
".git/objects/c2/216b7062dbc6f21bf875ed8d14a8e20d1b90f5": "b4092af6e87ae24c922b440f199a80fa",
".git/objects/c2/b66615ccb8a98f0415e71e1c665cb106c1a7e9": "d53ac5d6430ae5d2b874f1d1b66cdb44",
".git/objects/c3/3cd21da8baff017652d889351d13a083c73485": "981b008869f74420fd76fc2afc632665",
".git/objects/c4/1253178fbc82b3afd444830fda9f8a937065a1": "f242ae81dce47efbf2f7c39660d8d0b3",
".git/objects/c5/16376834e67587e093d01c04955c3729a89fc1": "fbf6522e19ad061011c886d3b058fdc6",
".git/objects/c5/3354ce5c9a8c70035b2a4dd97f7304f0fe119b": "a1d0ac50a0b242ab7f8635ad074c36b8",
".git/objects/c7/159433e8fdd5fcbc92bec998b7aa95dffd0514": "17a78075633d74c4a176bcf10c7846a4",
".git/objects/c8/47385b94793d30e278d6b7a02252abc63b34cb": "ad562e393b2b74f0e9820f2d3e5b88c4",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/f6b6bec338490faf6ddf852230055d813dc64e": "5ba1e03c172a0ee1301452e97ae56f8d",
".git/objects/cd/e5cf654f7759ec4fca79e2061e450b974f02e8": "f61b9c0d895c066ba2e7045639d50cc0",
".git/objects/ce/c06a9f2bbfdcf5db81087a710c7ece2c332413": "0f98cfe60798d5341bb804a275a66124",
".git/objects/d1/3abea13f03024659f5b7efe712bc0346863ec4": "8f15a46abd101800b0db05d90b7c7b9c",
".git/objects/d1/aea9df569d48e44041638d6343c6816f5211e3": "c7b41c74d16bbabac1a093a8bd43df36",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/109d2bf3b1643a6b4dea1ef0891c2bdc44bdcf": "cf0c303cdc469e4674d653a707e24ac1",
".git/objects/d6/74aba6ef4c7bf7d5f1911897528e41e63130e3": "106b4b9512a834b309d6e3344130463d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/89ac8623a0783010f825435184f7d3e0dad2d6": "7b729c6e77c0dde52b012c561bdab4a2",
".git/objects/d9/a2a946d050773cfc510b5e9dc5f469bf2ad601": "f7b3b15c67bfb0553c30a0486daf4168",
".git/objects/d9/bc31712d51d11c84eaeb86833069f074e12930": "e011aa4d621d6b25c3c94cd729faad9c",
".git/objects/da/c9a714a8ff291ff7d28678b255375d97fda275": "5bdd0c4cdc5a73210a46611391f13b69",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/db/99cfcb336534c2348da10ccf96de3a91c43e17": "d595220e374d80fbf08ad2c6ac11538f",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e3/1d81c5864303b9e18929ca21a5bc41e64f39b2": "bb23507a304b81176b85df2decb1d6ef",
".git/objects/e3/567934998507be1a795021b9b80bf2e73b3523": "3f5fa6f9078aaff735baa046bfeec668",
".git/objects/e3/7a80a390a82e48bb79886c8c6725306fded97e": "da637cc5f66063a68002fdcfa4e6620f",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e5/fbe2daeb2aff079044a9b9c959132914cb164c": "10c0b6b7e2b2ced6c25036d771c903e7",
".git/objects/e6/ae162c3a7544700dc8f397aff481e0f1c43b7c": "fe657e60202fff0085677881c53d887a",
".git/objects/e7/ef58d89830ff06807d5a3ebcba62c1a0180d1f": "709ff9df844d0d8af0eed45c952f4c26",
".git/objects/e8/8ec48c11545a7843560f9c5c306a5ef0123396": "de867042417aad751c8060daf743786a",
".git/objects/e9/ed58f27e66a77c9c85b6ee3b4140c09f12e0c4": "2dc8fcf85f1f00b9b766d63a01c75059",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/889b4628c3f29e95498e151fdf324cc1ada08d": "b03b6464a2bd96449e9d2cd0a4cd86fe",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ef/6b1a2b35c55ca1d7e6e2c1c450df76d0d0f9a4": "96a4bde682457d7deca1fb6ca2fb8e14",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f3/67dff4500675fc7b1c459507b0ab2149e76473": "09b9bde94a3e7cc021ba06c5b585aee3",
".git/objects/f4/0edc47fea9cf42a08a88f53ede4bfe7308cc98": "babf55337ed2c58d3e028ada4fd73872",
".git/objects/f5/20edf8a02008ea9209ee6a1c0313145322c656": "320e9611ded941ba575dd2f0e63ef910",
".git/objects/f5/f69924285187ab74474c1c0f8e0517bcfb36de": "23685194c19ebb5e314ecf88eabada3e",
".git/objects/f7/f32787af88bf8ca5e4c481a9ca1a62b63e0a3b": "71802f88aed32d05cdb1386bea20d0aa",
".git/objects/fc/11a33c2494c6d0d5c8d952a95a673c4c1e5848": "a3184a0f982dd6edc3cceffa6dd451dc",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fc/917c341cf7e6ef8d291f97b3aa0809ac7d9689": "848fb448f9f3bd970e52b577bd8f4113",
".git/objects/fd/d730ba25a885847a971959b59d3fe23e8de57e": "ac51f4e677031d353703c1d7015fa481",
".git/objects/fd/f6694542f33ab8d99d9bcc9ab303182c578b2e": "8eac76c17f6acf2e1383123cd26ddcf7",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/fa1b8c8257bb949b54093d3dc9aefe265cba26": "83485c80604cd3f0dcf3bc0fa265aa79",
".git/objects/ff/3e99cf60d20bfb184d5cf5bb6e4383fec8adb5": "f4221da4eea19765c63abd764105ab05",
".git/objects/ff/a04af7377901be9034b15b88fffae5bb27d05d": "63f525c95575bed309eccd866a096c7b",
".git/ORIG_HEAD": "dfe2ece9cb9bd35d4049c88629ba5f75",
".git/refs/heads/main": "9c5935c50707aa5967c46ced85365079",
".git/refs/remotes/origin/main": "9c5935c50707aa5967c46ced85365079",
".github/workflows/jekyll-gh-pages.yml": "3276f2faa94174d0b8b7c4ad114e41e4",
".github/workflows/static.yml": "7b30ac9604a8f2495b94fe5be3292699",
"assets/AssetManifest.bin": "4b89f4d147410bbe5957ad580a3783bc",
"assets/AssetManifest.bin.json": "264f1d52e5ec0b65ad65a2ff6b28d4d3",
"assets/AssetManifest.json": "0dd82baed7c8bac421dd61d5584f3963",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/instagram.svg": "c2c8311623dae328556ef13540d80358",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/icons/youtube.svg": "feeb7b9769f5f7b6d301bd8b0d48bc01",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/images/profile.jpeg": "163f24d981b1a33537671f4a5dfeee5f",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "972b2713232bcfc0871a8a241f09ca33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8cd3ea6d8728bd47bdf8b77e2b9b4d28",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"CNAME": "aa20395b0c259043a3981e08556d69df",
"favicon.png": "9fb5704e719f93940bba93d69ebbd5cb",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bbf5d28ff748414c998fcba0b72abeec",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f342a7558f5d6662e5cff7917506ac5b",
"/": "f342a7558f5d6662e5cff7917506ac5b",
"main.dart.js": "820e8bd6fb34c4ec79422271abcec0d4",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
