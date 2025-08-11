'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8f9563e99bd458da462bf6c34de4ae9",
".git/config": "65e2f478516fb32cb4690ba8dd64ce13",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ae667b5f0f45b60077d6e1c381467af0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "9cc34167400c5ec118f8a4520b420413",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5d775e808ec15b310c756033cca2c0f4",
".git/logs/refs/heads/master": "e5ed431f4baae2cb03ba749a31696ef0",
".git/logs/refs/remotes/origin/main": "543aaf0c2ae1ff49840f3d8323666936",
".git/logs/refs/remotes/origin/master": "3cfbbb8600cfabe56222784a26775b1f",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/06/4028a09d47776edd4dfbbbb13f9e74a8af1abd": "0b7e3e8400f47e31ec16daa6bf508bac",
".git/objects/06/442ec09021172eba78bce6b58952aeaf33ef9f": "83cd94cd48544345689cf6679d5cf057",
".git/objects/0d/5ada014eef00827ec3c4dc15cf5fd717722ccf": "508af3bb10ec23b7144aa64637c04825",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/11/0465267c5ade0578e17dc4a71411ff4bf8b291": "a2d813ae18fca4a6accbdfc0edbe9386",
".git/objects/11/1ee00656b606b5f6052f4e1f473dda63ff92fb": "c76cd967bd112c38725e56c4b5556c08",
".git/objects/16/aade7e6fa3a8386e8bcbc10774e92d8c9d5906": "fe9eda037346eb61e7bce9429797495f",
".git/objects/17/057a2bf7ab4bbc33ab2c291ecb29becf0086cd": "951b55187715cd1be96f9d5be8e04450",
".git/objects/17/edd4739ec3c7d8eea9c73d074a3c7bea813686": "899b593589bce535b5fd8459dbe901a1",
".git/objects/19/66e1c18ff25cf188b07318cd22d5d978741cef": "06d040474f269b9b223a809211e7e41d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/d7803d8301ae6cb6b41c877b3115bbc70617e9": "fee94a910164f651873089d42cc47d4f",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/22/43e62510233203a968d81726c0a3c091138414": "5af79d61581922bfeceb4482c1f6f0df",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/1777afa4a335a0597d3d863aba12b34e3f23de": "43cedf6aeee3d8bb9d5b2f0f2fd247c2",
".git/objects/25/046b871d6a2f023fb65757c4bc647d7046675c": "ff57bf4ec07823fc8188cb82ee0dae36",
".git/objects/27/75143de561ed1cdb32bac6f4575a0efbbde1c2": "c364b3bfe3762ed46ac18fa2b77effa2",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2c/35532a3899de99c79d69cb12c1225c2ed2b415": "3d0411ba6df9cc6e46259edf925f753d",
".git/objects/2f/50b8a30c34b721a51803da084e0e32bd72b3e7": "e9472a0847041d17324563cf6d3e5313",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/30/5f7797a57f4c2f6c5e12061dc130821d0a6405": "f02d3004239f78e13dbf48df995c3015",
".git/objects/31/39dc7cf301ea55d8f5e781d98d5c58a6ee1ccd": "e26ff2b827306e1115fe3796b3329bdc",
".git/objects/32/699d19c3d8c3bf0e12062e5c6e834c1553def2": "965036e54d79b7745d17bd96ab7b2c5b",
".git/objects/32/b7a52892ed94faa2fbd4ffb180ace2f229bdf9": "2cb230ca6ce0dc7fb6d2391a6a51a21b",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/35/8c7fef9a6a1be966d0d8b69f10f2840a8e7add": "0f51d5f7f66424133382d6c07058c48e",
".git/objects/36/22be14d89ad484dda41d86584e7fb4925beb8e": "fd4c2850a873319c6ea8a244421c600b",
".git/objects/39/17d19395a387023b88f9d1e9c6ae818e175b5c": "df746a2c44a2b59ca1026ed363dcf31c",
".git/objects/39/f4d7f4e66a6fbcd8f1f99d5d2b0216c7f6039a": "f36258c64bc2f3f71e44ce41486f8539",
".git/objects/3c/38f510d6227e6085e190e1898125d12a71e5c1": "90fac2eecdb35902580fab85efcb6f2b",
".git/objects/3d/88637faa9eae28677b182f366cfb15886c51b0": "6251c82b6e49d94ddf40147a5ae04374",
".git/objects/3f/57a24825187eee277638d688b1c2f909a95f98": "17a444af952468cb7518b4a08ecee41c",
".git/objects/41/ca8cd3583a6fad0eacb2f1253ec5dbe735b24b": "4ac483c37e7e04081d7ccbf0eebe0939",
".git/objects/43/0e2ae4e204e7edc71c9dfab3820e5990b1998b": "c6c0269070dd12c226e635dbb22be47b",
".git/objects/46/eddfffde72a0b776dbab23330ff9cf21c9ac36": "26a09c1b1b96a4b42de1e1f2fea94241",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/7cdde0682dd885b07d27ba8fcdffe320f3c552": "3311ca66a34782d55d09f9d98698801f",
".git/objects/4b/8c30b9880abda653452371c928d13e26cf183a": "dbebfe28af5c78981cc50fdc418cb7ec",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/8d13ced71582f5998a487ed897e8dd902e396e": "dc5bfa03cda6cc946c5f45ae57fdc19c",
".git/objects/4d/db699479615a3220b649bc55dd939c5a38be0a": "68bd42ae7b0f8a058e7edb7eac356b27",
".git/objects/4e/4f2762d648a2dd7d7045bba16f549497ccd676": "7260250f9333f928c6e2510684c81f03",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/f3d5c588789d6b3f6371ec3956a77eaf515b5b": "c5544a6233c75187e2b7955434727b2d",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/d34616335b6bae84058f4f311a63a636f91d15": "5f1d5453a263ffb395c6142ebf7b6bc2",
".git/objects/5d/5b189d1de6b446d15498fb13e1c293b5a97d76": "e88721d0e1b96d5c10f31b2d1f65a30e",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/62/21dc9d7af5ef3c7c2f5969b659b295ebf887d0": "913283b93608335fec48647358f1d832",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/69/1d8d3dc32754560dae4237ec0cb0779f9c0379": "54aef709bafa2c83801a48b1b63aa916",
".git/objects/6b/0020c8c69cac9c1e71ed6b4dde6ff347d10b7c": "30944b6713d04f3d3d9182f3140a3242",
".git/objects/6e/4e259e17dc647b973ade6c11a59e0cc84105a5": "98a5ce4527c8f1271b63ce949b505a26",
".git/objects/6e/8edbf0691e01641398a6c772fa23ff9dd4880e": "97d86dd9a2cb24b00671210387670430",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/dac93202667911a81b498bbc2fe1641bece6e5": "f10e5ac54610a371b7e30787f39a56d4",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/dd5c71d73fb0c63c7a0fa4495b6d60fd317dd3": "36f66e0df344f164a51c24fd371a3b01",
".git/objects/78/6a3f12bb2ce161d8490aa11d39cc8e4c49ba91": "bf1e6f9b12fd5b541fbcb898245dcc45",
".git/objects/7f/dca7ba217ea933eb6486f725fbbf774bef83c4": "c8208cd071e538cf2f3e808e29575656",
".git/objects/81/eec9a9fd7b6a14c56bf5202c92127fbfb1b6b1": "8a2f90aa9fd5053664f3391a5ad4b6aa",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/b607f1622ecb18429ee1659d36b181efb063a5": "fb33bdc197e2af2695d51676bb86f37d",
".git/objects/83/c623e2217c95fcf9887915af1c07f57cb57929": "f9bbc1588c7212f9a59016ddc4b50c4f",
".git/objects/85/8dfb11c63a377d9c27d82f29993a123bbcf873": "b3ec2a9dffe66e89d62fbe4001b3e6d4",
".git/objects/86/8143dfe8c0eaddba0d990ccecd610ed20131e4": "4a9f169986516a34861d26b6180fa382",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/821f0e0abb87f10fff88873f971a0e1914e916": "c00b2df9ed9ea677d1e7acfd240e714c",
".git/objects/8b/b31a61fb513cc1620de60e5572505750dd9f85": "91288a1a4003614b84663b86b28e6b08",
".git/objects/8c/87c6150c7abbfed57ad0de9022d782ee0b8691": "6f4aa4b4364bce7407280918ebf0e505",
".git/objects/8c/c2c9067d422858cf7891ea8020eaaf0b55d874": "1362346171bc61d5c1aed71424416bb4",
".git/objects/8e/1b9e3408e7b5e23f58c7a43c9fb43c52b3a48f": "72d83fc4cd6bddbe2ec9bcd30cfe013a",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/58b55b2ce420ad12ba431d8239e46376113e7c": "9979e22a85effd1e6c8a1d7d914146d3",
".git/objects/92/2799d8a69bdfaf76421b6461af3a78c443f0bd": "54cb065796d0f0f88f959740e7e83fbc",
".git/objects/93/00891151f2f9fa517547b32288c9a859b37cc9": "88818f406090f736c33e63c083035041",
".git/objects/96/ee31b3901712ecb677b9c398384fac1a2fc5df": "1a80186c7f0ba9f8dc63a4753eca1f65",
".git/objects/97/22133646d670fdf613d08df3631b775d64ef45": "75c1600ac605d226ca5e624c62c01487",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9a/76d48b7e77b43d47e7e49b86b25d2b4d971ca4": "b2a215cbe97fcfd490f24e1d9ef52c44",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/1fe48021e6a599e5a1f888de11d56ce313469f": "01f743f1a04063531028882db15fd401",
".git/objects/a0/e5732d8d223c9d4745f3a367ac1ffb64ba4610": "b58b262a9f081bbc659ac3240ad9f4be",
".git/objects/a2/00b9fa0f20c98d1b24943f927f19a0a5fc6fe4": "2d3a6b1ce55fde9c6655e5e53f4baaea",
".git/objects/a2/34a01a55d612a540f98436e3b1b9bea6f9a673": "2e96c1b2901b3df4e28045f356f8b464",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a5/dda66992f3cac89a01849851c1bb4706461397": "68d0645d271633ceb888eb8ed5116654",
".git/objects/a5/f27fe9f58f6361c92ddd6f44ba6f9b3a90e070": "fc10a4513973446b675d5b8c0f786ac5",
".git/objects/a7/0867d189b6358225e51f7e42a978e25ee2912b": "0a1161567fdcaef0afeb8d6abab30a2b",
".git/objects/a7/6644356d7c9f184a42840dcf59ecb6b8a29734": "474aba7ed426d1e9772fa4255f615881",
".git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
".git/objects/aa/1e87e655d0097fd6e059518e494d00427c0e03": "1aaa715059830e0c0017f97fff97edc6",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ac/d63bda675ac81b7dcb2726bcb14b9e570b74b5": "81faefc26243b35ef1eac00e754555f5",
".git/objects/b5/a0f5a597b73e6d7a5a702021a9c1ea8c7361dc": "7eb7f9c1ef71b4c261d9eec0d2ec5c99",
".git/objects/b6/7001b164e72900a8fa9f538c5c9085585757eb": "fd93508c5fefc94c80c40b8229427f64",
".git/objects/b6/8fc359e68b976fa0c0dccf7f20c880970d132a": "11bd345fc9a5f6bcd4469ac6b6cea8de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/afcdfb613de7531f9325bcce5781dbbf909e23": "24bf43cdbb4b1694bc4632d0d7ed4f5f",
".git/objects/b8/a25f32d538c58a7e1fd8776860c633b9ecee1e": "75c5ca8016008f8a08317cb874431115",
".git/objects/b9/0e589255d29b6923290d5cf75da2aa70654a6e": "3e3b5bfbe7df7b16eee05289a498bc69",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bd/ae1ad5585c238882f4097e50bb8b02e899656f": "a8e4185ad0f2b31b72065eb4a13a9da8",
".git/objects/bd/e106fddcf0cc156963686f90361d64ec9988f2": "fb7859b77745fff4dd3538dadb9ebb12",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/bb8f5f37d1b3f4d282870c3fce91182f450824": "badb3274a35bb7e75b42c227010572af",
".git/objects/c2/d48e6f25da902c15b4fdb9db8cc542e0e5f500": "6f9dc7bcd64bcdc9134c262714d99915",
".git/objects/c4/64c55b0bfe8f64550de9ce813e44887eda963a": "c825751c2891debc67972aed1ca48b89",
".git/objects/c5/16376834e67587e093d01c04955c3729a89fc1": "fbf6522e19ad061011c886d3b058fdc6",
".git/objects/c5/89cc4d7ec7538f8418ebf4efde1db2336bd699": "e94be03a9c3ff3a11c52bcec1347360d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/616037ae5b52368a902fb6b1e3c8fa64d4deec": "166f9cf7bfcb24505be08d1238311964",
".git/objects/c9/8b8c256cbf0b0e319565c584f67dea44acb2bc": "83f53cbe727863696993e8b08a8fb6a8",
".git/objects/ce/030d0a9d4c2737da90c9d670129689419b40b8": "e9335fc4ddf42850beac2bf676cc83e4",
".git/objects/ce/c06a9f2bbfdcf5db81087a710c7ece2c332413": "0f98cfe60798d5341bb804a275a66124",
".git/objects/d3/07e1b58a3403eff601d2c490fcb640a019b8f7": "ff52eb46138deeb43f3ade79e4545568",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3fb11bdefd9c1f6a587d4fd833178a57461409": "1f8532f794c688ab2700b2fa52868fd7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/88208e32199e5e64a80892fedea2f910053db2": "60bb81b2dcf78976ffd23a2f30246911",
".git/objects/da/27f451cd7dae0f442566b05965bd0cafe9e3d6": "75b758f3ef15c273abad8a76f611d4b1",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/01c8e9cd34be1b3a15fdfd98fe7445b8218812": "b37e401b8fc7dd023099b5219ac7522d",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/7a80a390a82e48bb79886c8c6725306fded97e": "da637cc5f66063a68002fdcfa4e6620f",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e7/ef58d89830ff06807d5a3ebcba62c1a0180d1f": "709ff9df844d0d8af0eed45c952f4c26",
".git/objects/e8/8ec48c11545a7843560f9c5c306a5ef0123396": "de867042417aad751c8060daf743786a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ee/1be2cee12924e1235f2b5f147fbb18202253a6": "f5107a2238d2b69731fa259e2b5b2f75",
".git/objects/f0/44005b2be912528f28bd922e02fbf2a46dae90": "229daee3a9c5647fea16a5cdec5cf4af",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f1/05993f08931a861a53e06f11a03617f0491029": "597fda20586d2345764274f29bd4fa68",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/d64aecdd4dd85f7a8446161759922faf433b15": "3a8439c7f4006ce6ed1ed9b14fdc16a3",
".git/objects/f4/05e75e95b7d9633a580b680d8eb597d19367ac": "a8b54adf56f083f36ebf34e119f223f5",
".git/objects/f7/f32787af88bf8ca5e4c481a9ca1a62b63e0a3b": "71802f88aed32d05cdb1386bea20d0aa",
".git/objects/f9/4497a4a2c2a0bd748887bfbc5793d73b298a07": "51bb65d94aa3053159ccfeabf15db355",
".git/objects/fb/3375af467f3f3e09208f32ebf6dc4fac77e67c": "33cdd1e53c06211d6eee84fc40a0df80",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/ff/a04af7377901be9034b15b88fffae5bb27d05d": "63f525c95575bed309eccd866a096c7b",
".git/ORIG_HEAD": "c884dccf687a778527c9425db40772ff",
".git/refs/heads/master": "451e804626f0ad83ee1818583de92003",
".git/refs/remotes/origin/main": "4c6ab3cc841a5544cff6b44cb9004c10",
".git/refs/remotes/origin/master": "451e804626f0ad83ee1818583de92003",
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
"assets/fonts/MaterialIcons-Regular.otf": "cff54572519754b7c9b838ec157f9db9",
"assets/NOTICES": "131cb9a0beb57db1272f22a0990a418c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "69edacdd2a137a77bac324674e365abd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"CNAME": "aa20395b0c259043a3981e08556d69df",
"favicon.png": "9fb5704e719f93940bba93d69ebbd5cb",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "7c8477248a77e6925de1849c5fc978bb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f342a7558f5d6662e5cff7917506ac5b",
"/": "f342a7558f5d6662e5cff7917506ac5b",
"main.dart.js": "9f98dd11cdec8556330963702e00a0a3",
"manifest.json": "5267228acc7c3e35cb7d13c95d908138",
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
