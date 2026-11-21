import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{l as t,t as n}from"./jsx-runtime-BDvC6cgS.js";import{t as r}from"./useCanvasAnimationLoop-B7f0ZqDf.js";var i=e(t(),1),a=n(),o=(0,i.memo)(function({count:e=320,className:t=``}){let n=(0,i.useRef)(null),o=(0,i.useRef)(null),s=(0,i.useMemo)(()=>[...Array(e)].map(()=>({x:Math.random(),y:Math.random(),radius:Math.random()*1.1+.3,alpha:Math.random()*.45+.2,phase:Math.random()*Math.PI*2,speed:Math.random()*.0018+8e-4,tint:Math.random()<.18})),[e]),c=(0,i.useCallback)(({ctx:e,width:t,height:n,timestamp:r,isStatic:i})=>{e.clearRect(0,0,t,n),s.forEach(a=>{let o=i?1:.65+Math.sin(r*a.speed+a.phase)*.3;e.globalAlpha=Math.min(1,Math.max(0,a.alpha*o)),e.fillStyle=a.tint?`#c4b5fd`:`#ffffff`,e.beginPath(),e.arc(a.x*t,a.y*n,a.radius,0,Math.PI*2),e.fill()}),e.globalAlpha=1},[s]);return r(n,{rootRef:o,onDraw:c}),(0,a.jsx)(`div`,{ref:o,className:`notes-stars ${t}`,"aria-hidden":`true`,children:(0,a.jsx)(`canvas`,{ref:n})})}),s=`---
title: L’AI Act européen, vu par une développeuse
date: 2026-10-13
type: event
location: Howest, Bruges (bâtiment A)
excerpt: Une banque, un chatbot et un score de crédit rouge ou vert. Ce qu’une soirée sur l’AI Act m’a appris sur la conception de systèmes d’IA.
cover: /notes-media/event-2026-10-13/ai-act-session.webp
coverAlt: Olivier Sustronck montre une slide avec six questions sur les bonnes données
draft: false
---

> « Vos données montrent seulement si ceux qui ont obtenu un crédit l’ont remboursé. Que savez-vous de ceux que vous avez refusés ? »

Cette question d’Olivier Sustronck m’est restée en tête après sa session Tech & Meet sur l’AI Act européen, une soirée dans le bâtiment A du campus Howest à Bruges.

## L’événement

Olivier, qui intervenait pour Franklin, a construit toute la soirée autour d’un seul cas : une banque où un chatbot collecte des informations et où un modèle d’IA attribue à chaque demande de crédit un score rouge ou vert. Est-ce autorisé ? Oui. Mais c’est à haut risque, et à partir de là il a détaillé ce que cela implique pour chaque acteur de la chaîne. L’entreprise de logiciels qui construit le modèle est le fournisseur. Elle doit conserver la documentation technique pendant dix ans, passer une évaluation de conformité et enregistrer le système dans une base de données européenne. La banque est le déployeur. Elle doit suivre la notice d’utilisation, garder un contrôle humain, conserver les logs au moins six mois et informer ses clients que l’IA intervient.

C’était plus juridique que technique, et c’était justement le but : la plupart de ces obligations finissent sur le bureau d’un développeur.

## Ce que je retiens

**De bonnes données, c’est plus que des données correctes.** La slide posait six questions : sont-elles exactes, complètes, à jour, cohérentes, représentatives et pertinentes ? Un modèle entraîné uniquement sur des prêts accordés n’a jamais vu les personnes qu’il a refusées. Il ne peut donc jamais apprendre s’il s’est trompé à leur sujet.

**Supprimer une colonne sensible ne supprime pas le biais.** L’origine ne figurait nulle part dans les données de la banque, et pourtant le taux de crédits accordés allait de 86 % dans une rue à 22 % dans une autre. Une adresse peut faire le travail du champ que vous avez supprimé. C’est un biais par proxy, et c’est ainsi que le redlining réapparaît sous forme d’algorithme.

**L’AI Act ne remplace pas le RGPD.** Dès qu’un modèle traite des données personnelles, les deux s’appliquent.

## Est-ce que je connaissais déjà le sujet ?

En partie. Le cadre juridique a été abordé dans notre cours de droit des technologies de l’information, mais cette session l’a rendu concret. Suivre un seul cas, de la collecte des données jusqu’aux logs, n’a rien à voir avec la lecture d’une liste d’articles.

## Ce qui pourrait être amélioré

La partie centrale était dense. Catégories de risque, annexes et rôles dans la chaîne se sont enchaînés rapidement, et c’est beaucoup à assimiler d’un coup. Un court exercice pratique, par exemple classer nous-mêmes le système de la banque, aurait aidé à mieux retenir la partie juridique.

## Après la session

Tech & Meet est une série récurrente, et la soirée s’est terminée autour d’un verre, l’occasion de discuter avec des camarades de classe. Un autre enseignant avait apporté un puzzle Howest, qui m’a occupée plus longtemps que prévu.

![Mes camarades et moi autour d’un verre après la session](/notes-media/event-2026-10-13/networking.webp)

![En train de faire le puzzle Howest](/notes-media/event-2026-10-13/puzzle.webp)

## Est-ce que j’y retournerais ?

Oui. Ce qui m’a le plus marquée en tant qu’ingénieure logicielle, c’est que beaucoup de ce que la loi exige n’est pas de la paperasse qu’on ajoute après coup. Les logs, le contrôle humain, la capacité d’expliquer pourquoi un score est rouge : tout cela relève de la conception, à intégrer dès le départ. Je recommanderais cette session à tout développeur susceptible de construire un jour un système qui attribue un score à des personnes.

J’ai aussi partagé ce que j’en retiens [sur LinkedIn](https://lnkd.in/p/ery_YtaA).
`,c=`---
title: 開発者の視点から見たEU AI法
date: 2026-10-13
type: event
location: Howest ブルージュ（A棟）
excerpt: 銀行、チャットボット、そして赤か緑の与信スコア。AI法についてのセッションで、AIシステムの作り方について学んだこと。
cover: /notes-media/event-2026-10-13/ai-act-session.webp
coverAlt: 良いデータについての6つの質問が書かれたスライドを指すOlivier Sustronckさん
draft: false
---

> 「あなたのデータが示しているのは、融資を受けた人が返済したかどうかだけです。では、断った人たちについて何を知っていますか？」

ブルージュにあるHowestキャンパスのA棟で行われた、Olivier SustronckさんによるEU AI法のTech & Meetセッション。そこで投げかけられたこの問いが、今も頭から離れません。

## イベントについて

Franklinの立場で登壇したOlivierさんは、ひとつのケースを軸に夜全体を組み立てていました。チャットボットが情報を集め、AIモデルがすべての融資申請に赤か緑のスコアを付ける銀行です。使ってもいいのか？はい。ただし高リスクに該当します。そこから、AIのバリューチェーンに関わる人それぞれにとって何を意味するのかを順に説明してくれました。モデルを開発するソフトウェア会社は「提供者」です。技術文書を10年間保管し、適合性評価を受け、システムをEUのデータベースに登録しなければなりません。銀行は「導入者」です。使用説明書に従い、人間による監督を維持し、ログを最低6か月保存し、AIが使われていることを顧客に知らせる必要があります。

内容は技術というより法律寄りでしたが、そこがまさにポイントでした。こうした義務の多くは、最終的に開発者の机の上に回ってくるからです。

## 学んだこと

**良いデータとは、正しいだけのデータではない。** スライドには6つの問いがありました。正確か、完全か、最新か、一貫しているか、代表性があるか、関連性があるか。承認された融資だけで学習したモデルは、自分が断った人を一度も見たことがありません。そのため、その人たちについての判断が間違っていたかどうかを学ぶことができないのです。

**センシティブな列を消しても、バイアスは消えない。** 銀行のデータには出自の情報はどこにもありませんでした。それでも、融資の承認率はある通りでは86%、別の通りでは22%と大きく異なっていました。住所が、削除したはずの項目の代わりを果たしてしまうことがあるのです。これは代理変数によるバイアス（プロキシバイアス）であり、かつてのレッドライニングがアルゴリズムの形でよみがえる仕組みでもあります。

**AI法はGDPRに取って代わるものではない。** モデルが個人データを扱う時点で、両方が適用されます。

## 以前から知っていたか

一部は知っていました。法的な枠組みは授業のIT法で扱いましたが、このセッションでそれが具体的になりました。ひとつのケースをデータ収集からログ記録まで追いかけるのは、条文の一覧を読むのとはまったく違う体験です。

## 改善できる点

中盤は内容が詰まっていました。リスクの分類、附属書、バリューチェーンでの役割が次々と続き、一度に理解するには量が多かったです。たとえば銀行のシステムを自分たちで分類してみるような短い演習があれば、法律の部分ももっと記憶に残ったと思います。

## セッションのあと

Tech & Meetは定期的に開催されているシリーズで、夜は軽い懇親会で締めくくられ、クラスメートと話す時間がありました。別の先生がHowestのジグソーパズルを持ってきていて、思っていたより長く夢中になってしまいました。

![セッション後の懇親会でクラスメートと](/notes-media/event-2026-10-13/networking.webp)

![Howestのパズルに挑戦中](/notes-media/event-2026-10-13/puzzle.webp)

## また参加したいか

はい。ソフトウェアエンジニアとして一番印象に残ったのは、法律が求めることの多くは後から付け足す書類仕事ではない、ということです。ログ記録、人間による監督、スコアがなぜ赤なのかを説明できること。これらは最初から組み込むべき設計です。人にスコアを付けるシステムをいつか作るかもしれない開発者には、ぜひこのセッションを勧めたいです。

学んだことは[LinkedIn](https://lnkd.in/p/ery_YtaA)でもシェアしています。
`,l=`---
title: Deepfake Detection – My First Paper Presentation Win
date: 2021-12-28
type: event
location: College Campus, CKCET
excerpt: From researching deep learning to presenting our ideas on stage, my teammate and I won first prize for our paper presentation on Deepfake Detection. An experience that strengthened my technical knowledge, confidence, teamwork, and communication skills during my second year.
cover: \${import.meta.env.BASE_URL}notes-media/event-2026-10-13/puzzle.webp
coverAlt: My teammate and me receiving the first prize for our Deepfake Detection paper presentation
draft: false
---

> "Technology becomes meaningful when we understand it, explore it, and share what we learn with others."

## The event

During my second year of Computer Science Engineering, I participated in a college-level paper presentation with my teammate. We chose an interesting and increasingly important topic: **Deepfake Detection using Deep Learning**.

We worked together to research the topic, understand the technology behind deepfakes, prepare our presentation, and explain our ideas to the audience and judges.

The experience became even more memorable when our presentation received **First Prize!** It was a proud moment for both of us and a great encouragement to explore more technical topics.

## The topic – Deepfake Detection using Deep Learning

Deepfakes are artificially generated or manipulated images, videos, and audio that can make someone appear to say or do things they never actually did.

We explored how deep learning techniques can help identify manipulated media and distinguish authentic content from artificially generated content.

Some of the areas we focused on included:

- **Deep Learning:** Understanding how neural networks learn patterns from data.
- **Deepfake Technology:** Exploring how AI can generate and manipulate digital media.
- **Detection Techniques:** Understanding approaches to identifying manipulated content.
- **Real-World Impact:** Learning about misinformation, digital identity, and online trust.

## Working as a team

Preparing the presentation with my teammate was an important part of the experience. We shared research, discussed technical concepts, organized the presentation, and helped each other prepare for questions.

Presenting a technical topic to an audience also pushed me to explain complex concepts in a simple and understandable way.

Winning first prize made our teamwork and preparation even more rewarding.

## What I learned

This experience taught me lessons beyond the technical topic itself.

- **Communication:** Explaining technical concepts clearly and confidently.
- **Teamwork:** Sharing responsibilities and collaborating towards a common goal.
- **Research Skills:** Exploring new technologies and understanding technical concepts.
- **Presentation Skills:** Organizing information and presenting ideas effectively.
- **Confidence:** Overcoming stage hesitation and answering questions from judges.

## A moment that helped me grow

Before this experience, I was still developing my communication and presentation skills. Preparing for the paper presentation gave me an opportunity to step forward, speak about technology, and express my ideas confidently.

Winning first prize during my second year was not just an achievement; it was a turning point that encouraged me to participate in more technical activities and improve myself.

## Would I do it again?

Absolutely! This was one of my memorable college experiences. Exploring Deepfake Detection, working with my teammate, presenting our research, and receiving first prize made the event special.

It taught me that technical knowledge becomes even more valuable when we can communicate it effectively.

**One topic, two teammates, one first prize, and a big step forward in my confidence!**



`,u=`---
title: De EU AI Act, door de ogen van een developer
date: 2026-10-13
type: event
location: Howest, Brugge (gebouw A)
excerpt: Een bank, een chatbot en een rode of groene kredietscore. Wat één avond over de AI Act me leerde over het bouwen van AI-systemen.
cover: /notes-media/event-2026-10-13/ai-act-session.webp
coverAlt: Olivier Sustronck wijst naar een slide met zes vragen over goede data
draft: false
---

> "Je data tonen enkel of wie krediet kreeg het ook terugbetaalde. Wat weet je over wie geweigerd werd?"

Die vraag van Olivier Sustronck bleef hangen na zijn Tech & Meet-sessie over de EU AI Act, een avond in gebouw A van de Howest-campus in Brugge.

## Het event

Olivier, die sprak namens Franklin, bouwde de hele avond op rond één casus: een bank waar een chatbot informatie verzamelt en een AI-model elke kredietaanvraag een rode of groene score geeft. Mag het? Ja. Maar het is hoog risico, en van daaruit liep hij door wat dat betekent voor iedereen in de keten. Het softwarebedrijf dat het model bouwt is de aanbieder. Het moet technische documentatie tien jaar bijhouden, een conformiteitsbeoordeling doorlopen en het systeem registreren in een EU-databank. De bank is de gebruiksverantwoordelijke. Ze moet de gebruiksaanwijzing volgen, mensen aan het stuur houden, logs minstens zes maanden bewaren en klanten laten weten dat er AI meespeelt.

Het was eerder juridisch dan technisch, en dat was net het punt. De meeste van die verplichtingen belanden uiteindelijk op het bureau van een developer.

## Wat ik meeneem

**Goede data is meer dan juiste data.** Zes vragen: is ze juist, volledig, actueel, consistent, representatief en relevant? Een model dat alleen op goedgekeurde leningen getraind is, heeft de mensen die het weigerde nooit gezien. Het kan dus nooit leren of het zich over hen vergist heeft.

**Een gevoelige kolom schrappen, schrapt de bias niet.** Afkomst stond nergens in de data van de bank, en toch liep het percentage goedgekeurde kredieten uiteen van 86% in de ene straat tot 22% in een andere. Een adres kan het werk doen van het veld dat je verwijderd hebt. Dat is proxybias, en zo komt redlining terug in de vorm van een algoritme.

**De AI Act vervangt de AVG niet.** Zodra een model persoonsgegevens verwerkt, gelden ze allebei.

## Kende ik dit al?

Gedeeltelijk. Het juridische kader kwam aan bod in ons vak IT-recht, maar deze sessie maakte het concreet. Eén casus volgen van data tot logging werkt veel beter dan een lijst artikels lezen.

## Wat kon beter

Het middenstuk was zwaar. Risicocategorieën, bijlagen en rollen in de keten volgden elkaar snel op, veel voor één avond. Een korte oefening, bijvoorbeeld het systeem van de bank zelf laten classificeren, had het juridische deel beter doen blijven hangen.

## Na de sessie

Tech & Meet is een terugkerende reeks, en de avond eindigde met een drankje waar ik bijpraatte met klasgenoten. Een andere lector had een Howest-puzzel meegebracht, die me langer bezighield dan gepland.

![Klasgenoten en ik op de netwerkdrink na de sessie](/notes-media/event-2026-10-13/networking.webp)

![Bezig met de Howest-puzzel](/notes-media/event-2026-10-13/puzzle.webp)

## Zou ik terug gaan?

Ja. Wat me als software engineer het meest bijbleef: veel van wat de wet vraagt is geen papierwerk dat je achteraf toevoegt. Logging, menselijk toezicht, kunnen uitleggen waarom een score rood is: dat is design dat je vanaf het begin inbouwt. Ik zou deze sessie aanraden aan elke developer die ooit een systeem zou kunnen bouwen dat mensen een score geeft.

Mijn takeaways deelde ik ook [op LinkedIn](https://lnkd.in/p/ery_YtaA).
`,d=`---
title: Derrière le masque de l’IA
date: 2026-11-17
type: event
location: Howest, Bruges (bâtiment A)
excerpt: Des data centers, des modèles qui découvrent qu’on va les remplacer et quatre questions à se poser chaque fois qu’on utilise l’IA. Ce qu’une soirée sur la littératie en IA m’a appris sur les outils que j’utilise tous les jours.
cover: /notes-media/event-2026-11-17/masker-van-ai-talk.webp
coverAlt: Wim Casteels en train de parler, avec sa slide de présentation derrière lui
draft: false
---

> « IA pour le climat ≠ IA générative. »

Cette phrase s’affichait en grand sur l’une des slides de Wim Casteels pendant sa session Tech & Meet « Het masker van AI » (« Le masque de l’IA »), une soirée dans le bâtiment A du campus Howest à Bruges. Elle résume toute la présentation : « IA » est un seul mot pour des choses très différentes, et on ne peut bien l’utiliser que si l’on sait de laquelle il s’agit.

## L’événement

Wim est enseignant et chercheur en IT & IA à l’AP Hogeschool d’Anvers. Avant cela, il a été chercheur en IA à l’IDLab (imec et Université d’Anvers) et à l’Institut royal météorologique, et data scientist chez Argenta. La présentation porte le même titre que son livre, qui dresse la carte des nombreuses façons dont l’IA touche la société. Ce n’était volontairement pas une plongée technique. L’objectif était de donner un cadre critique pour utiliser l’IA de manière responsable.

Il a commencé le 30 novembre 2022, le jour où ChatGPT est apparu sous la forme d’un simple site web où chacun pouvait poser une question. En deux mois, il comptait 100 millions d’utilisateurs. De là, il est remonté à 1956, quand un atelier d’été a donné son nom à la discipline, puis il a parcouru les vagues qui ont suivi : l’IA à base de règles qui n’a pas tenu ses promesses, les systèmes experts des années 1980, le machine learning des années 1990 (pensez à votre filtre antispam), le deep learning et la vision par ordinateur des années 2010, et aujourd’hui les chatbots. Le reste de la soirée a porté sur la superintelligence, la planète, l’Europe et ce qu’on peut faire soi-même.

## Ce que je retiens

**Dans un communiqué de presse, « IA » peut désigner deux choses très différentes.** Des prévisions météo plus rapides, l’équilibrage du réseau électrique, la découverte de nouveaux matériaux, le suivi de la déforestation : il s’agit surtout de machine learning classique, petit et efficace. La grosse facture énergétique vient de l’IA générative. Wim a cité [The AI Climate Hoax](https://algorithmwatch.org/en/ai-climate-hoax/), un rapport publié en février 2026. Selon ce rapport, 74 % des affirmations des géants de la tech sur les bénéfices climatiques de l’IA ne sont pas prouvées, et la plupart des bénéfices revendiqués viennent de l’IA classique. Un type d’IA reçoit le mérite, l’autre consomme l’électricité.

**Chaque prompt repose sur quelque chose de physique.** L’IA vit « dans le cloud », mais le cloud, ce sont des data centers, comme celui de Google dans le Hainaut. Ils mettent les réseaux électriques sous pression : en Irlande, les data centers ont consommé l’an dernier près d’un quart de toute l’électricité. Beaucoup sont refroidis par évaporation d’eau, une eau qui doit bien venir de quelque part. Et le matériel ne dure pas : les puces achetées pour cette course peuvent être dépassées en quelques années et finir en déchets électroniques, en partie sur des décharges où des enfants y sont exposés. Plus haut dans la chaîne, il y a les mines d’où proviennent les minerais.

**Ceux qui la construisent demandent eux-mêmes des freins.** Wim a parlé d’une recherche d’Anthropic sur l’« agentic misalignment », où un modèle ayant accès à la messagerie d’une entreprise découvre qu’il va être remplacé par un système aux objectifs différents, et où l’on peut lire comment il pèse ce qu’il va faire ensuite. Ce n’est plus seulement un scénario de laboratoire : l’incident d’OpenAI chez Hugging Face, dont j’ai parlé après [la session Tech & Meet précédente](/notes/event-2026-10-27), a aussi été évoqué. En juillet, plus de 1 300 employés d’entreprises d’IA de pointe ont signé « Pacing the Frontier », une déclaration demandant au gouvernement américain de soutenir un effort international pour développer les outils permettant de ralentir délibérément le développement de l’IA.

**Quatre questions avant d’utiliser l’IA.** La présentation s’est terminée sur quelque chose de concret. Les quatre questions viennent de l’AI Fluency Framework de Rick Dakan et Joseph Feller, où on les appelle les « 4 D ».

![Les quatre questions sur la slide de Wim, basées sur l’AI Fluency Framework](/notes-media/event-2026-11-17/four-questions.webp)

- **Delegation (déléguer) :** est-ce une tâche pour l’IA, et qu’est-ce que je garde volontairement entre mes mains ?
- **Description (décrire) :** de quoi ai-je besoin exactement, et quel contexte est-ce que je donne ?
- **Discernment (discerner) :** chaque fait et chaque source tiennent-ils la route ? Y a-t-il quelque chose d’inventé ou d’omis ?
- **Diligence :** suis-je transparente sur mon usage de l’IA, et est-ce que je reste responsable du résultat ?

En tant qu’ingénieure logiciel, c’est dans le discernement que je me reconnais le plus. J’utilise l’IA tous les jours pour écrire du code, mais je conçois l’architecture moi-même et je relis tout ce qu’elle écrit. Un code qui compile n’est pas forcément un code correct.

## Après la présentation

Comme d’habitude, la soirée s’est terminée par un moment de networking, et je suis restée pour en discuter avec des amis.

![Mes amis et moi pendant le networking après la présentation](/notes-media/event-2026-11-17/friends.webp)

## Est-ce que j’y retournerais ?

Oui. La plupart des présentations sur l’IA parlent de ce que la technologie sait faire. Celle-ci parlait de ce qu’elle coûte, de qui décide de son rythme, et de la façon de l’utiliser sans éteindre son propre jugement. Je la recommanderais à toute personne qui utilise des outils d’IA au quotidien, développeur ou non.
`,f=`---
title: AIの仮面の裏側
date: 2026-11-17
type: event
location: Howest ブルージュ（A棟）
excerpt: データセンター、自分が置き換えられると知るモデル、そしてAIを使うたびに自分に問いかけたい4つの質問。AIリテラシーについての夜に、毎日使っているツールについて学んだこと。
cover: /notes-media/event-2026-11-17/masker-van-ai-talk.webp
coverAlt: 自己紹介のスライドを背に話すWim Casteelsさん
draft: false
---

> 「気候のためのAI ≠ 生成AI」

これは、Wim CasteelsさんのTech & Meetセッション「Het masker van AI」（AIの仮面）で、スライドに大きく映し出されていた一文です。会場はブルージュにあるHowestキャンパスのA棟でした。この一文がトーク全体を表しています。「AI」というひとつの言葉が、まったく違うものを指している。どれを相手にしているのかを知って初めて、AIをうまく使えるのです。

## イベントについて

Wimさんは、アントワープのAP HogeschoolでIT & AIを教える講師であり、研究者です。それ以前は、IDLab（imecとアントワープ大学）とベルギー王立気象研究所でAI研究者として、Argentaでデータサイエンティストとして働いていました。トークのタイトルは彼の著書と同じで、この本はAIが社会に与えるさまざまな影響を整理したものです。あえて技術的な深掘りはせず、AIを責任をもって使うための批判的な視点を伝えることが目的でした。

話は2022年11月30日から始まりました。ChatGPTが、誰でも質問できるシンプルなウェブサイトとして登場した日です。2か月で利用者は1億人に達しました。そこから1956年にさかのぼります。夏のワークショップでこの分野に名前がついた年です。そしてその後の波をたどりました。期待に応えられなかったルールベースのAI、1980年代のエキスパートシステム、1990年代の機械学習（スパムフィルターがその例です）、2010年代のディープラーニングとコンピュータビジョン、そして今のチャットボット。夜の残りの時間は、超知能、地球環境、ヨーロッパ、そして自分にできることについての話でした。

## 学んだこと

**プレスリリースの「AI」は、まったく違う2つのものを指していることがある。** より速い天気予報、電力網のバランス調整、新しい素材の発見、森林破壊の監視。これらの多くは、小さくて効率的な従来型の機械学習です。大量のエネルギーを使っているのは生成AIのほうです。Wimさんが紹介したのは、2026年2月に発表された報告書「[The AI Climate Hoax](https://algorithmwatch.org/en/ai-climate-hoax/)」です。それによると、AIの気候への貢献についての大手テック企業の主張のうち74%は根拠が示されておらず、主張されている貢献の多くは従来型のAIによるものです。手柄を立てるのは一方のAIで、電力を使うのはもう一方のAI、というわけです。

**どのプロンプトも、物理的な何かの上で動いている。** AIは「クラウド」にあると言われますが、クラウドの正体はデータセンターです。ベルギーのエノー州にあるGoogleのデータセンターもそのひとつです。データセンターは電力網に負担をかけています。アイルランドでは昨年、データセンターが全電力のほぼ4分の1を消費しました。多くのデータセンターは水を蒸発させて冷却していて、その水はどこかから持ってこなければなりません。さらに、ハードウェアは長持ちしません。この競争のために買われたチップは数年で古くなり、電子廃棄物になります。その一部は、子どもたちがさらされる廃棄物処理場に行き着きます。サプライチェーンをさかのぼれば、原料となる鉱物が掘り出される鉱山があります。

**作っている人たち自身が、ブレーキを求めている。** WimさんはAnthropicの「エージェント型ミスアライメント」の研究について話しました。会社のメールにアクセスできるモデルが、自分が別の目標を持つシステムに置き換えられると知り、次に何をするかを考える過程を読むことができる研究です。これはもう研究室の中だけのシナリオではありません。[前回のTech & Meetセッション](/notes/event-2026-10-27)のあとに私が書いた、Hugging FaceでのOpenAIのインシデントも話題に上がりました。7月には、最先端のAI企業の社員1,300人以上が「Pacing the Frontier」という声明に署名しました。AI開発のペースを意図的に調整するためのツールを作る国際的な取り組みを支援するよう、アメリカ政府に求める声明です。

**AIを使う前に、4つの質問を。** トークは実践的な内容で締めくくられました。この4つの質問は、Rick DakanさんとJoseph FellerさんによるAI Fluency Frameworkから来ていて、英語では「4つのD」と呼ばれています。

![AI Fluency Frameworkをもとにした、Wimさんのスライドの4つの質問](/notes-media/event-2026-11-17/four-questions.webp)

- **Delegation（任せる）：** これはそもそもAIに任せる仕事なのか。自分の手に残しておくものは何か。
- **Description（伝える）：** 何が必要なのか、どんな背景を伝えるのか。
- **Discernment（見極める）：** すべての事実と情報源は正しいか。作り話や抜け落ちはないか。
- **Diligence（責任を持つ）：** AIを使っていることをオープンにしているか。結果に対して自分が責任を持っているか。

ソフトウェアエンジニアとして、一番共感するのはDiscernmentです。私は毎日AIを使ってコードを書いていますが、アーキテクチャは自分で設計し、AIが書いたものはすべてレビューしています。コンパイルが通るコードが、正しいコードだとは限りません。

## セッションのあと

いつものように、夜はネットワーキングで終わりました。私は残って、友達とトークについて話し合いました。

![トークのあとのネットワーキングで友達と](/notes-media/event-2026-11-17/friends.webp)

## また参加したいか

はい。AIのトークの多くは、技術に何ができるかを扱います。このトークは、それにどんなコストがかかるのか、そのスピードを誰が決めるのか、そして自分の判断を手放さずにどう使うのかを扱っていました。開発者かどうかに関係なく、毎日AIツールを使っているすべての人に勧めたいです。
`,p=`---
title: 24 Hours of Innovation – SRM Hackathon
date: 2022-10-28
type: event
location: SRM Institute of Science and Technology, Chennai
excerpt: Our Eye Controllable Personal Computer project was selected for the SRM 24-Hour Hackathon. As team lead, I collaborated with two classmates to build an innovative assistive technology solution, tackle technical challenges, and gain valuable lessons in leadership, teamwork, ands problem-solving.
cover: \${import.meta.env.BASE_URL}/notes-media/event-2026-11-17/masker-van-ai-talk.webp
coverAlt: Our team presenting the Eye Controllable Personal Computer project
draft: false
---

> "Innovation begins when we turn an idea into something that can make a difference."


## The event

During my third year of Computer Science Engineering, I got the opportunity to participate in the SRM 24-Hour Hackathon. Our project, Eye Controllable Personal Computer, was selected for the event.

I participated with two of my classmates and took responsibility as the Team Lead. It was an exciting opportunity to collaborate, share ideas, and transform our concept into a practical solution within a limited time.

The project – Eye Controllable Personal Computer

Our project focused on enabling users to control a computer using eye movements instead of depending completely on a traditional keyboard and mouse.

We explored computer vision and automation technologies to detect eye movements and translate them into computer actions.

## The technologies we worked with included:

Python: Core programming and application logic.

OpenCV: Image processing and computer vision.

MediaPipe Face Mesh: Facial landmark and eye movement detection.

PyAutoGUI: Controlling computer operations through detected movements.

PyQt5: Building the desktop application interface.

## My role as Team Lead

Working with two teammates and leading the project was a valuable experience. I coordinated our tasks, discussed implementation ideas, helped solve technical challenges, and ensured we worked together towards our goal.

Managing a project within a 24-hour deadline taught me how important communication, time management, decision-making, and teamwork are when building a real-world solution.

## What I learned

The hackathon was not just about developing a project. It was also about learning through challenges and working together under pressure.

Leadership: Taking responsibility and coordinating a team.

Teamwork: Sharing ideas and supporting each other.

Problem-Solving: Handling unexpected technical challenges.

Time Management: Prioritizing tasks within a strict deadline.

Technical Learning: Gaining practical experience with Python and computer vision.

![Certificate](/notes-media/event-2026-11-17/masker-van-ai-talk.webp)

## Would I do it again?

Absolutely! Being part of the SRM 24-Hour Hackathon was one of the memorable experiences of my third year. Having our project selected and getting the opportunity to lead my team made it even more special.

It gave me confidence to explore innovative ideas, work with new technologies, and understand that learning happens best when we build something together.

24 hours, one innovative idea, three teammates, and countless lessons learned!`,m=`---
title: Achter het masker van AI
date: 2026-11-17
type: event
location: Howest, Brugge (gebouw A)
excerpt: Datacenters, modellen die ontdekken dat ze vervangen worden en vier vragen die je stelt telkens je AI inschakelt. Wat een avond over AI-geletterdheid me leerde over de tools die ik elke dag gebruik.
cover: /notes-media/event-2026-11-17/masker-van-ai-talk.webp
coverAlt: Wim Casteels aan het woord, met zijn introductieslide achter hem
draft: false
---

> "Klimaat-AI ≠ generatieve AI."

Die zin stond in grote letters over een van de slides van Wim Casteels tijdens zijn Tech & Meet-sessie "Het masker van AI", een avond in gebouw A van de Howest-campus in Brugge. Hij vat de hele talk samen: "AI" is één woord voor heel verschillende dingen, en je kunt het pas goed gebruiken als je weet met welke je te maken hebt.

## Het event

Wim is docent en onderzoeker IT & AI aan AP Hogeschool in Antwerpen. Daarvoor was hij AI-onderzoeker bij IDLab (imec en Universiteit Antwerpen) en het KMI, en data scientist bij Argenta. De talk heeft dezelfde titel als zijn boek, dat de vele manieren in kaart brengt waarop AI de samenleving raakt. Het was bewust geen technische deep dive. Het doel was een kritisch kader om AI verantwoord te gebruiken.

Hij begon op 30 november 2022, de dag waarop ChatGPT verscheen als een eenvoudige website waar iedereen een vraag kon stellen. Na twee maanden waren er 100 miljoen gebruikers. Van daaruit ging hij terug naar 1956, toen een zomerworkshop het vakgebied zijn naam gaf, en door de golven die volgden: AI op basis van regels die de hype niet waarmaakte, expertsystemen in de jaren tachtig, machine learning in de jaren negentig (denk aan je spamfilter), deep learning en computer vision in de jaren 2010, en nu chatbots. De rest van de avond ging over superintelligentie, de aarde, Europa en wat je zelf kunt doen.

## Wat ik meeneem

**"AI" in een persbericht kan twee heel verschillende dingen betekenen.** Snellere weersvoorspellingen, het stroomnet balanceren, nieuwe materialen ontdekken, ontbossing opvolgen: dat is meestal klassieke machine learning, klein en efficiënt. De grote energiefactuur komt van generatieve AI. Wim verwees naar [The AI Climate Hoax](https://algorithmwatch.org/en/ai-climate-hoax/), een rapport van februari 2026. Daaruit bleek dat 74% van de claims van Big Tech over de klimaatvoordelen van AI onbewezen is, en dat de meeste voordelen die geclaimd worden van klassieke AI komen. Het ene type AI krijgt de eer, het andere verbruikt de stroom.

**Elke prompt draait op iets fysieks.** AI leeft "in de cloud", maar de cloud bestaat uit datacenters, zoals dat van Google in Henegouwen. Ze zetten het stroomnet onder druk: in Ierland verbruikten datacenters vorig jaar bijna een kwart van alle elektriciteit. Veel ervan worden gekoeld door water te laten verdampen, en dat water moet ergens vandaan komen. En de hardware gaat niet lang mee: chips die voor deze race gekocht worden, kunnen binnen enkele jaren verouderd zijn en eindigen als e-waste, deels op stortplaatsen waar kinderen eraan blootgesteld worden. Verder in de keten zitten de mijnen waar de grondstoffen vandaan komen.

**Wie het bouwt, vraagt zelf om remmen.** Wim sprak over onderzoek van Anthropic naar agentic misalignment, waarin een model met toegang tot de mailbox van een bedrijf ontdekt dat het vervangen wordt door een systeem met andere doelen, en je kunt lezen hoe het afweegt wat het daarna doet. Dat is niet langer enkel een labscenario: het OpenAI-incident bij Hugging Face waarover ik schreef na [de vorige Tech & Meet-sessie](/notes/event-2026-10-27) kwam ook aan bod. In juli tekenden meer dan 1.300 medewerkers van frontier AI-bedrijven "Pacing the Frontier", een verklaring die de Amerikaanse overheid vraagt om een internationale inspanning te steunen om de tools te bouwen waarmee je de ontwikkeling van AI bewust kunt vertragen.

**Vier vragen voor je AI inschakelt.** De talk eindigde met iets praktisch. De vier vragen komen uit het AI Fluency Framework van Rick Dakan en Joseph Feller, waar ze bekend staan als de 4 D's. Wim vertaalde ze naar vier V's.

![De vier vragen op Wims slide, gebaseerd op het AI Fluency Framework](/notes-media/event-2026-11-17/four-questions.webp)

- **Verdelen:** is dit een taak voor AI, en wat houd ik bewust zelf in handen?
- **Verwoorden:** wat moet eruit komen, en welke context en aanpak geef ik mee?
- **Verifiëren:** klopt elk feit en elke bron? Is er iets verzonnen of weggelaten?
- **Verantwoorden:** ben ik open over mijn AI-gebruik, en blijf ik zelf verantwoordelijk voor het resultaat?

Als software engineer herken ik me het meest in Verifiëren. Ik gebruik elke dag AI om code te schrijven, maar ik ontwerp de architectuur zelf en review alles wat het schrijft. Code die compileert, is nog geen code die klopt.

## Na de talk

Zoals altijd eindigde de avond met netwerken, en ik bleef nog om alles na te bespreken met vrienden.

![Mijn vrienden en ik op de netwerkdrink na de talk](/notes-media/event-2026-11-17/friends.webp)

## Zou ik terug gaan?

Ja. De meeste AI-talks gaan over wat de technologie kan. Deze ging over wat ze kost, wie beslist hoe snel ze gaat, en hoe je ze gebruikt zonder je eigen oordeel uit te schakelen. Ik zou ze aanraden aan iedereen die elke dag AI-tools gebruikt, developer of niet.
`,h=[`event`,`hackathon`,`podcast`,`project`,`site`,`other`],g=[`en`,`nl`,`fr`,`ja`],_=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/,v=e=>e.trim().replace(/^(['"])(.*)\1$/,`$2`),y=(e,t,n=`en`)=>{let r=_.exec(t),i={},a=r?r[2]:t;if(r)for(let e of r[1].split(/\r?\n/)){let t=e.indexOf(`:`);t===-1||e.trimStart().startsWith(`#`)||(i[e.slice(0,t).trim()]=v(e.slice(t+1)))}let o=h.includes(i.type)?i.type:`other`;return{slug:e,lang:n,title:i.title||e,date:i.date||``,type:o,location:i.location||void 0,excerpt:i.excerpt||``,cover:i.cover||void 0,coverAlt:i.coverAlt||void 0,draft:i.draft===`true`,body:a.trim()}},b=e=>[...e].sort((e,t)=>Number(e.type===`site`)-Number(t.type===`site`)||t.date.localeCompare(e.date)),x=e=>g.includes(e),S=e=>{let t=e.replace(/^.*\//,``).replace(/\.md$/,``),n=/^(.*)\.([a-z]{2})$/.exec(t);return n&&x(n[2])?{slug:n[1],lang:n[2]}:{slug:t,lang:`en`}},C=e=>{let t=(e??``).toLowerCase().split(/[-_@.]/)[0];return x(t)?t:`en`},w=(e,t)=>e[C(t)]??e.en??Object.values(e)[0],T=Object.assign({"./posts/event-2026-10-13.fr.md":s,"./posts/event-2026-10-13.ja.md":c,"./posts/event-2026-10-13.md":l,"./posts/event-2026-10-13.nl.md":u,"./posts/event-2026-11-17.fr.md":d,"./posts/event-2026-11-17.ja.md":f,"./posts/event-2026-11-17.md":p,"./posts/event-2026-11-17.nl.md":m}),E=new Map;for(let[e,t]of Object.entries(T)){let{slug:n,lang:r}=S(e),i=y(n,t,r);i.draft||E.set(n,{...E.get(n),[r]:i})}var D=e=>b([...E.values()].map(t=>w(t,e)).filter(e=>!!e)),O=(e,t)=>{let n=e?E.get(e):void 0;return n?w(n,t):void 0},k={day:`numeric`,month:`long`,year:`numeric`},A=(e,t)=>{let n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return e;try{return new Intl.DateTimeFormat(t,k).format(n)}catch{return new Intl.DateTimeFormat(`en`,k).format(n)}};export{o as i,O as n,D as r,A as t};