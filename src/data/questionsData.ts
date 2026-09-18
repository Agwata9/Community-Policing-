import { QuestionItem, TopicSection } from '../types';

export const TOPIC_SECTIONS: TopicSection[] = [
  {
    id: 'intro-definitions',
    number: 1,
    title: 'Introduction & Definitions',
    description: 'Foundational terms every candidate must define precisely, plus the general objectives of the SOIP community policing unit.',
  },
  {
    id: 'history',
    number: 2,
    title: 'History of Community Policing',
    description: 'Colonial roots, 1990s multi-party clamour, Vera Institute 1999, 2005 Ruai launch by President Mwai Kibaki, and constitutional milestones.',
  },
  {
    id: 'principles',
    number: 3,
    title: 'Principles of Community Policing',
    description: 'The eleven core principles guiding community policing, including voluntary participation, trust, democracy, and confidentiality.',
  },
  {
    id: 'legal-provisions',
    number: 4,
    title: 'Legal Provisions',
    description: 'Article 244(e) of the Constitution of Kenya and Sections 96–100 of the National Police Service Act, 2011.',
  },
  {
    id: 'activities',
    number: 5,
    title: 'Community Policing Activities',
    description: 'Statutory definition, crime management strategies, and the 17 recognized community-level policing activities.',
  },
  {
    id: 'partnership-4cs',
    number: 6,
    title: 'Community Partnership & 4Cs',
    description: 'The 4 Cs of partnership (Cooperation, Collaboration, Communication, Commitment), partnership types, and trust building.',
  },
  {
    id: 'problem-solving-sara',
    number: 7,
    title: 'Problem Solving & SARA',
    description: 'Problem-Oriented Policing concepts, the S.A.R.A. model (Scanning, Analysis, Response, Assessment), and measurable outcomes.',
  },
  {
    id: 'change-management',
    number: 8,
    title: 'Change Management',
    description: 'Organizational transformation requirements and comparisons between traditional and community policing paradigms.',
  },
  {
    id: 'stakeholders',
    number: 9,
    title: 'Stakeholders & Their Roles',
    description: 'Specific duties of the Police, GPAs, the Community, Citizens, the Media, Youths, Women, and Private Security.',
  },
  {
    id: 'structures-cpf-cpc',
    number: 10,
    title: 'Community Policing Structures',
    description: 'Community Policing Forums (CPFs) and Community Policing Committees (CPCs): definitions, composition, and functions.',
  },
  {
    id: 'nyumba-kumi',
    number: 11,
    title: 'Nyumba Kumi / Usalama wa Msingi',
    description: 'Household and cluster-level security anchoring, membership categories, functions, and reporting channels.',
  },
  {
    id: 'county-policing-authority',
    number: 12,
    title: 'County Policing Authority',
    description: 'Sections 41–47 & 97 NPSA 2011, LN 114/2015: composition, functions, meetings, appointment vetting, and removal procedure.',
  },
  {
    id: 'implementation-sequence',
    number: 13,
    title: 'Implementation of Community Policing',
    description: 'The 7-step roll-out sequence from Contact, Public Meeting, Consultation, Adoption, Launch, Mobilization, to M&E.',
  },
  {
    id: 'challenges',
    number: 14,
    title: 'Challenges',
    description: 'Real-world operational bottlenecks in Kenya: trust deficits, vigilante distortions, training gaps, and informer misconceptions.',
  },
  {
    id: 'benefits',
    number: 15,
    title: 'Benefits',
    description: 'Community-specific, police-specific, and shared mutual benefits derived from effective community policing.',
  },
  {
    id: 'mock-paper-1',
    number: 16,
    title: 'Mock Examination Paper 1 (Full 100 Marks)',
    description: 'Complete Ordinary SOIP Course examination: Section I (10 compulsory questions, 40 marks) & Section II (5 essay questions, 60 marks).',
  },
  {
    id: 'mock-paper-2',
    number: 17,
    title: 'Mock Examination Paper 2 (Full 100 Marks)',
    description: 'Complete Ordinary SOIP Course examination: Section I (10 compulsory questions, 40 marks) & Section II (5 essay questions, 60 marks).',
  },
];

export const ALL_QUESTIONS: QuestionItem[] = [
  // -------------------------------------------------------------
  // TOPIC 1: Introduction & Definitions
  // -------------------------------------------------------------
  {
    id: 'q1-1',
    topicId: 'intro-definitions',
    topicName: 'Introduction & Definitions',
    questionNumber: 1,
    questionType: 'define',
    marks: 2,
    questionText: 'Define the term "Community" as used in community policing.',
    modelAnswer:
      'A community is a small or large social unit whose members share something in common — such as norms, religion, values or identity — and who share a sense of place situated within a given geographical area, e.g. a country, village or town.',
    markingPoints: [
      'Social unit (small or large) whose members share something in common',
      'Examples of commonality: norms, religion, values, or identity',
      'Share a sense of place situated within a defined geographical area (e.g. country, village, town)',
    ],
  },
  {
    id: 'q1-2',
    topicId: 'intro-definitions',
    topicName: 'Introduction & Definitions',
    questionNumber: 2,
    questionType: 'define',
    marks: 2,
    questionText: 'Define "Policing" as used in this unit.',
    modelAnswer:
      'Policing is a proactive process put in place to maintain law and order and social cohesion, remove the fear of crime, and promote respect for the rule of law.',
    markingPoints: [
      'Proactive process (not merely reactive)',
      'Maintains law, order, and social cohesion',
      'Removes the fear of crime',
      'Promotes respect for the rule of law',
    ],
  },
  {
    id: 'q1-3',
    topicId: 'intro-definitions',
    topicName: 'Introduction & Definitions',
    questionNumber: 3,
    questionType: 'define',
    marks: 2,
    questionText: 'Define "Partnership" in the context of community policing.',
    modelAnswer:
      'Partnership is a cooperative relationship between two or more entities working together to achieve a common goal.',
    markingPoints: [
      'Cooperative relationship',
      'Between two or more entities (e.g., police and community)',
      'Working together toward achieving a common goal',
    ],
  },
  {
    id: 'q1-4',
    topicId: 'intro-definitions',
    topicName: 'Introduction & Definitions',
    questionNumber: 4,
    questionType: 'short',
    marks: 2,
    questionText: 'What is meant by "Area" in community policing?',
    modelAnswer:
      'Area includes a geographical area, village, residential estate, location, ward, or community of interest identified by the community policing authority for the purpose of community policing.',
    markingPoints: [
      'Includes geographical area, village, residential estate, location, or ward',
      'Includes community of interest',
      'Identified by the community policing authority for community policing purposes',
    ],
  },
  {
    id: 'q1-5',
    topicId: 'intro-definitions',
    topicName: 'Introduction & Definitions',
    questionNumber: 5,
    questionType: 'state',
    marks: 4,
    questionText: 'State any four general objectives of the Community Policing course.',
    modelAnswer:
      'Any four of: (1) develop effective community policing skills; (2) relate effectively with the public; (3) participate effectively in community policing activities; (4) comprehend the challenges and emerging issues in community policing; (5) describe the legal provisions in community policing; (6) understand and apply the Nyumba Kumi initiative.',
    markingPoints: [
      'Develop effective community policing skills',
      'Relate effectively with the public',
      'Participate effectively in community policing activities',
      'Comprehend challenges and emerging issues',
      'Describe legal provisions in community policing',
      'Understand and apply Nyumba Kumi initiative',
      '(Award 1 mark per valid objective, max 4 marks)',
    ],
  },
  {
    id: 'q1-6',
    topicId: 'intro-definitions',
    topicName: 'Introduction & Definitions',
    questionNumber: 6,
    questionType: 'explain',
    marks: 3,
    questionText: 'Why is this unit important to a police trainee?',
    modelAnswer:
      'It equips trainees with knowledge, skills and attitudes to effectively discharge policing duties in partnership with the community, exposing them to theory and case analysis to build effective police-community relations skills.',
    markingPoints: [
      'Equips trainees with requisite knowledge, skills, and attitudes',
      'Enables discharge of policing duties in partnership with the community',
      'Exposes trainees to theory and case analysis for effective police-community relations',
    ],
  },
  {
    id: 'q1-7',
    topicId: 'intro-definitions',
    topicName: 'Introduction & Definitions',
    questionNumber: 7,
    questionType: 'distinguish',
    marks: 4,
    questionText: 'Distinguish between "Community" and "Partnership" as defined in the manual.',
    modelAnswer:
      'Community refers to a social unit sharing common norms/values within a geographical area; partnership refers to the cooperative relationship formed between two or more entities (e.g. police and community) to achieve a shared goal.',
    markingPoints: [
      'Community (2 mks): Social unit sharing norms/values and sense of place in a geographical area',
      'Partnership (2 mks): Cooperative relationship between two or more entities working together toward a common goal',
    ],
  },
  {
    id: 'q1-8',
    topicId: 'intro-definitions',
    topicName: 'Introduction & Definitions',
    questionNumber: 8,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain why "policing" is described as a proactive rather than a reactive process in this definition.',
    modelAnswer:
      'Because the concept anticipates and prevents crime and disorder before it occurs — maintaining order, removing fear of crime and promoting the rule of law — rather than merely reacting after offences have been committed.',
    markingPoints: [
      'Anticipates and prevents crime and disorder before occurrence',
      'Maintains order and removes fear of crime continuously',
      'Contrast with traditional reactive policing which merely responds after offences occur',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 2: History of Community Policing in Kenya
  // -------------------------------------------------------------
  {
    id: 'q2-1',
    topicId: 'history',
    topicName: 'History of Community Policing',
    questionNumber: 9,
    questionType: 'explain',
    marks: 3,
    questionText: 'Describe the nature of policing in Kenya during the colonial and early post-colonial period.',
    modelAnswer:
      'Policing was highly bureaucratic, reactive, and structured primarily to protect the interests of the Imperial British Protectorate/the status quo of the state, at the expense of the common citizen, with primary emphasis on crime control through reactive practices.',
    markingPoints: [
      'Highly bureaucratic and reactive',
      'Structured primarily to protect Imperial British Protectorate / state status quo',
      'Operated at the expense of ordinary citizens',
      'Heavy reliance on reactive crime control practices',
    ],
  },
  {
    id: 'q2-2',
    topicId: 'history',
    topicName: 'History of Community Policing',
    questionNumber: 10,
    questionType: 'short',
    marks: 3,
    questionText: 'What development in Kenya\'s political history created demand for police reform in the late 1990s?',
    modelAnswer:
      'The clamour for police reform arose from the expanding democratic space brought about by the re-birth of multiparty politics, which demanded a shift from reactionary to proactive policing strategies.',
    markingPoints: [
      'Expanding democratic space',
      'Re-birth of multiparty politics in Kenya',
      'Public demand for transition from reactionary to proactive policing strategies',
    ],
  },
  {
    id: 'q2-3',
    topicId: 'history',
    topicName: 'History of Community Policing',
    questionNumber: 11,
    questionType: 'short',
    marks: 2,
    questionText: 'Which international organization first popularized community policing in Kenya, and in what year?',
    modelAnswer:
      'The New York-based Vera Institute, in 1999, proposed support for community-policing-related projects in Kenya.',
    markingPoints: [
      'Organization: Vera Institute (New York-based)',
      'Year: 1999',
    ],
  },
  {
    id: 'q2-4',
    topicId: 'history',
    topicName: 'History of Community Policing',
    questionNumber: 12,
    questionType: 'list',
    marks: 2,
    questionText: 'Name the two civic organizations through which the Vera Institute\'s community policing support was channeled.',
    modelAnswer:
      'The Kenya Human Rights Commission (KHRC) and the Central Business District Association (CBDA).',
    markingPoints: [
      'Kenya Human Rights Commission (KHRC) (1 mk)',
      'Central Business District Association (CBDA) (1 mk)',
    ],
  },
  {
    id: 'q2-5',
    topicId: 'history',
    topicName: 'History of Community Policing',
    questionNumber: 13,
    questionType: 'short',
    marks: 3,
    questionText: 'When and where was community policing formally launched in Kenya, and by whom?',
    modelAnswer:
      'In 2005, at Ruai Police Station, by then President Hon. Mwai Kibaki.',
    markingPoints: [
      'Year: 2005',
      'Venue: Ruai Police Station',
      'Official: President Hon. Mwai Kibaki',
    ],
  },
  {
    id: 'q2-6',
    topicId: 'history',
    topicName: 'History of Community Policing',
    questionNumber: 14,
    questionType: 'law',
    marks: 3,
    questionText: 'Which constitutional and statutory provisions gave community policing legal force in Kenya, and in what year?',
    modelAnswer:
      'In 2010, community policing was captured by Article 244(e) of the Constitution of Kenya, and it was operationalized by the National Police Service Act, 2011.',
    markingPoints: [
      'Constitution of Kenya 2010: Article 244(e)',
      'Statute: National Police Service Act (NPSA), 2011',
    ],
  },
  {
    id: 'q2-7',
    topicId: 'history',
    topicName: 'History of Community Policing',
    questionNumber: 15,
    questionType: 'state',
    marks: 3,
    questionText: 'State any three things that community policing recognizes, according to the manual.',
    modelAnswer:
      'Any three of: (1) the police is not the sole custodian of national security; (2) the police mandate extends beyond routine crime control; (3) the local community is best placed to understand its own security concerns; (4) the need to establish and retain police legitimacy by upholding the rule of law.',
    markingPoints: [
      'Police is not the sole custodian of national security',
      'Police mandate extends beyond routine crime control',
      'Local community is best placed to understand its security concerns',
      'Need to establish and retain police legitimacy by upholding the rule of law',
      '(Award 1 mark each, max 3 marks)',
    ],
  },
  {
    id: 'q2-8',
    topicId: 'history',
    topicName: 'History of Community Policing',
    questionNumber: 16,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain the significance of Article 244(e) of the Constitution of Kenya, 2010 in the history of community policing.',
    modelAnswer:
      'It formally captured the spirit of community policing at the constitutional level, obligating the National Police Service to foster and promote relationships with the broader society, and was later operationalized through the NPSA, 2011.',
    markingPoints: [
      'Constitutional entrenchment of community policing',
      'Explicit constitutional obligation on NPS to foster and promote relationships with broader society',
      'Provided the foundation operationalized through the NPSA 2011',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 3: Principles of Community Policing
  // -------------------------------------------------------------
  {
    id: 'q3-1',
    topicId: 'principles',
    topicName: 'Principles of Community Policing',
    questionNumber: 17,
    questionType: 'list',
    marks: 6,
    questionText: 'List the eleven principles of community policing as outlined in the manual.',
    modelAnswer:
      'The eleven principles are: (1) Voluntary participation; (2) Building partnership (inclusivity); (3) Trust orientation; (4) Confidentiality; (5) Commitment; (6) Community orientation; (7) Pro-active problem solving; (8) Guided by existing laws; (9) Geographical area based; (10) Accountability and transparency; (11) Democracy.',
    markingPoints: [
      'Voluntary participation',
      'Building partnership (inclusivity)',
      'Trust orientation',
      'Confidentiality',
      'Commitment',
      'Community orientation',
      'Pro-active problem solving',
      'Guided by existing laws',
      'Geographical area based',
      'Accountability and transparency',
      'Democracy',
      '(0.5 to 1 mk per accurately stated principle)',
    ],
  },
  {
    id: 'q3-2',
    topicId: 'principles',
    topicName: 'Principles of Community Policing',
    questionNumber: 18,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain the principle of "voluntary participation."',
    modelAnswer:
      'Members of community policing forums, committees and the general public render their services willingly and have no claim to compensation solely for services rendered to such forums and committees.',
    markingPoints: [
      'Render services willingly/voluntarily without coercion',
      'No claim to financial compensation or salary solely for services rendered',
      'Applies to forums, committees, and the general public',
    ],
  },
  {
    id: 'q3-3',
    topicId: 'principles',
    topicName: 'Principles of Community Policing',
    questionNumber: 19,
    questionType: 'explain',
    marks: 3,
    questionText: 'Why is "trust" described as central to the principles of community policing?',
    modelAnswer:
      'Trust encourages active citizen participation in sharing information; breaching trust undermines faith and confidence in the entire concept, making cooperation impossible.',
    markingPoints: [
      'Trust promotes citizen willingness to share timely, sensitive intelligence',
      'Breaching trust destroys public confidence and goodwill',
      'Without trust, bilateral cooperation and joint problem-solving cannot occur',
    ],
  },
  {
    id: 'q3-4',
    topicId: 'principles',
    topicName: 'Principles of Community Policing',
    questionNumber: 20,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain the principle of "democracy" as applied in community policing structures.',
    modelAnswer:
      'Office bearers of community policing structures must be democratically elected by cluster/community members themselves, not appointed by Government Policing Agencies (GPAs).',
    markingPoints: [
      'Office bearers must be elected democratically by cluster/community members',
      'Must NOT be arbitrarily appointed by Government Policing Agencies (GPAs) or police commanders',
      'Ensures legitimacy and grassroots ownership',
    ],
  },
  {
    id: 'q3-5',
    topicId: 'principles',
    topicName: 'Principles of Community Policing',
    questionNumber: 21,
    questionType: 'distinguish',
    marks: 4,
    questionText: 'Distinguish between "confidentiality" and "accountability and transparency" as principles of community policing.',
    modelAnswer:
      'Confidentiality requires that information shared should not be prematurely disclosed, protecting sources; accountability and transparency requires officers to be held liable for their actions/decisions and community members to be genuine in their dealings — together they build trust without compromising security.',
    markingPoints: [
      'Confidentiality (2 mks): Safeguarding informant identity and sensitive information from premature disclosure',
      'Accountability & Transparency (2 mks): Holding officers liable for actions/decisions and ensuring open, genuine dealings between police and public',
    ],
  },
  {
    id: 'q3-6',
    topicId: 'principles',
    topicName: 'Principles of Community Policing',
    questionNumber: 22,
    questionType: 'explain',
    marks: 2,
    questionText: 'Explain the principle "guided by existing laws."',
    modelAnswer:
      'All community policing activities must respect and operate within the rule of law; no action taken under community policing may violate existing legal provisions.',
    markingPoints: [
      'All activities must strictly conform to the rule of law',
      'No vigilantism, extrajudicial action, or violation of statutory laws is permitted under the guise of community policing',
    ],
  },
  {
    id: 'q3-7',
    topicId: 'principles',
    topicName: 'Principles of Community Policing',
    questionNumber: 23,
    questionType: 'explain',
    marks: 2,
    questionText: 'Why is community policing described as "geographical area based"?',
    modelAnswer:
      'Kenyans come together in clusters defined by physical locations, felt needs and pursuit of common ideals, meaning structures such as Nyumba Kumi are organized around specific localities rather than abstract groupings.',
    markingPoints: [
      'Clusters defined by physical location and felt security needs',
      'Grounded in specific neighbourhoods/localities rather than abstract affiliations',
    ],
  },
  {
    id: 'q3-8',
    topicId: 'principles',
    topicName: 'Principles of Community Policing',
    questionNumber: 24,
    questionType: 'scenario',
    marks: 4,
    questionText: 'A community policing committee member discloses confidential informer information to a third party for personal gain. Which two principles has this member violated? Explain.',
    modelAnswer:
      '(i) Confidentiality — information received or shared should not be prematurely disclosed, and informant identity must be protected. (ii) Trust — breaching trust undermines faith and confidence in the concept and discourages future information sharing by the public.',
    markingPoints: [
      'Principle 1: Confidentiality (failure to protect sensitive info and informant identity)',
      'Principle 2: Trust / Trust Orientation (undermines public faith, confidence, and willingness to share info)',
      'Bonus mention of Accountability and Transparency / Guided by existing laws',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 4: Legal Provisions (Constitution & NPSA 2011)
  // -------------------------------------------------------------
  {
    id: 'q4-1',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 25,
    questionType: 'law',
    marks: 5,
    questionText: 'State the five functions of the National Police Service under Article 244 of the Constitution of Kenya, 2010.',
    modelAnswer:
      '(a) Strive for the highest standards of professionalism and discipline; (b) prevent corruption and promote transparency and accountability; (c) comply with constitutional standards of human rights and fundamental freedoms; (d) train staff to high standards of competence, integrity, and respect for human rights and dignity; (e) foster and promote relationships with the broader society.',
    markingPoints: [
      '(a) Professionalism and discipline',
      '(b) Prevent corruption, promote transparency and accountability',
      '(c) Comply with human rights and fundamental freedoms',
      '(d) Train staff to high standards of competence, integrity, and human dignity',
      '(e) Foster and promote relationships with the broader society (core community policing basis)',
      '(1 mark each, 5 marks total)',
    ],
  },
  {
    id: 'q4-2',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 26,
    questionType: 'law',
    marks: 4,
    questionText: 'Under Section 96 NPSA 2011, state any four objects of liaising with communities through community policing initiatives.',
    modelAnswer:
      'Any four of: (1) establishing and maintaining active and equal partnership between community and Service; (2) promoting communication between Service and community; (3) promoting cooperation in fulfilling policing needs; (4) improving rendering of police services at national, county and local levels; (5) improving transparency and accountability of the Service to the community; (6) promoting policing problem identification and problem-solving.',
    markingPoints: [
      'Active and equal partnership between community and Service',
      'Promoting communication between Service and community',
      'Promoting cooperation in fulfilling policing needs',
      'Improving rendering of police services at all levels',
      'Improving transparency and accountability to the community',
      'Promoting problem identification and problem-solving',
      '(1 mark each, max 4 marks)',
    ],
  },
  {
    id: 'q4-3',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 27,
    questionType: 'law',
    marks: 2,
    questionText: 'Under Section 98 NPSA 2011, who is responsible for facilitating the establishment of area community policing committees?',
    modelAnswer:
      'A police officer in charge of an area, in consultation with stakeholders.',
    markingPoints: [
      'Police officer in charge of an area (OCS / Station Commander)',
      'In consultation with community stakeholders',
    ],
  },
  {
    id: 'q4-4',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 28,
    questionType: 'law',
    marks: 3,
    questionText: 'What is the composition of an area community policing committee under Section 98(2)–(3)?',
    modelAnswer:
      'Representatives of community policing forums in the area, elected by such forums, together with the station commander or administration police post commander.',
    markingPoints: [
      'Representatives of community policing forums in the area (elected by forums)',
      'Station commander (OCS) or Administration Police post commander',
    ],
  },
  {
    id: 'q4-5',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 29,
    questionType: 'law',
    marks: 4,
    questionText: 'Under Section 100 NPSA 2011, describe the procedure for electing office bearers of a community policing committee.',
    modelAnswer:
      'Members elect a chairperson and a vice-chairperson from among their number; the chairperson must be a civilian member while the vice-chairperson must be a police officer.',
    markingPoints: [
      'Elected from among committee members',
      'Chairperson MUST be a civilian member (2 mks)',
      'Vice-chairperson MUST be a police officer (2 mks)',
    ],
  },
  {
    id: 'q4-6',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 30,
    questionType: 'law',
    marks: 2,
    questionText: 'What is the quorum for a meeting of a community policing committee under Section 100(6)?',
    modelAnswer:
      'The quorum is the majority of the members of the committee.',
    markingPoints: [
      'The majority of the members of the committee',
    ],
  },
  {
    id: 'q4-7',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 31,
    questionType: 'law',
    marks: 2,
    questionText: 'Who presides over a committee meeting where both the chairperson and vice-chairperson are absent?',
    modelAnswer:
      'The members present elect one of their own number to preside.',
    markingPoints: [
      'Members present elect one of their own number to preside',
    ],
  },
  {
    id: 'q4-8',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 32,
    questionType: 'law',
    marks: 3,
    questionText: 'Explain the significance of Section 99 NPSA 2011 regarding the functions of community policing committees.',
    modelAnswer:
      'It gives committees latitude to perform any functions they consider necessary and appropriate to achieve the objects under Section 96, including functions envisaged under Article 244(e) of the Constitution — allowing flexibility to respond to local needs.',
    markingPoints: [
      'Grants broad statutory latitude/discretion to committees',
      'Perform functions considered necessary to achieve Sec 96 objects and Art 244(e)',
      'Provides legal flexibility to address unique local security needs',
    ],
  },
  {
    id: 'q4-9',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 33,
    questionType: 'law',
    marks: 3,
    questionText: 'Can members of community policing forums/committees claim compensation for their services? Cite the relevant provision.',
    modelAnswer:
      'No. Section 100(5) NPSA 2011 provides that members render services on a voluntary basis and have no claim to compensation solely for services rendered.',
    markingPoints: [
      'Answer: No (services rendered on voluntary basis)',
      'Citation: Section 100(5) of the National Police Service Act, 2011',
      'Explicit statutory bar on claims for compensation solely for services rendered',
    ],
  },
  {
    id: 'q4-10',
    topicId: 'legal-provisions',
    topicName: 'Legal Provisions',
    questionNumber: 34,
    questionType: 'law',
    marks: 4,
    questionText: 'Explain the constitutional link between Article 244(e) and Sections 96–100 of the NPSA, 2011.',
    modelAnswer:
      'Article 244(e) obligates the NPS to foster relationships with the broader society; Sections 96–100 of the NPSA 2011 operationalize this constitutional object by establishing the legal framework, structures and procedures for community policing.',
    markingPoints: [
      'Article 244(e) provides the overarching constitutional command/duty to foster relationships with broader society',
      'Sections 96–100 NPSA 2011 act as the operationalizing statute that creates concrete mechanisms, committees, and procedures',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 5: Community Policing Activities
  // -------------------------------------------------------------
  {
    id: 'q5-1',
    topicId: 'activities',
    topicName: 'Community Policing Activities',
    questionNumber: 35,
    questionType: 'law',
    marks: 4,
    questionText: 'Give the statutory definition of Community Policing under Section 2 of the NPSA, 2011.',
    modelAnswer:
      'Community Policing means the approach to policing that recognizes voluntary participation of the local community in the maintenance of peace, and recognizes that the police need to be responsive to communities and their needs — its key element being joint problem identification and problem-solving, while respecting the different responsibilities of the police and public in crime prevention and maintaining order.',
    markingPoints: [
      'Approach recognizing voluntary participation of local community in maintenance of peace',
      'Police responsiveness to communities and their needs',
      'Key element: joint problem identification and problem-solving',
      'Respects distinct responsibilities of police and public in crime prevention and order',
    ],
  },
  {
    id: 'q5-2',
    topicId: 'activities',
    topicName: 'Community Policing Activities',
    questionNumber: 36,
    questionType: 'short',
    marks: 2,
    questionText: 'Describe community policing as a crime management strategy.',
    modelAnswer:
      'It is a crime management strategy that allows the community and police to work together with a view to identifying and solving problems of security and social disorder around them.',
    markingPoints: [
      'Crime management strategy',
      'Enables community and police to work together',
      'Identifies and solves security problems and social disorder jointly',
    ],
  },
  {
    id: 'q5-3',
    topicId: 'activities',
    topicName: 'Community Policing Activities',
    questionNumber: 37,
    questionType: 'list',
    marks: 4,
    questionText: 'List any eight community policing activities as identified in the manual.',
    modelAnswer:
      'Any eight of: (1) neighbourhood watch; (2) joint recreational programs; (3) environmental cleaning; (4) campaigns/awareness on emerging crime trends; (5) recommending economic interventions to relevant authorities; (6) open police days; (7) base security surveys; (8) education on basic security tips; (9) eradication of illegal brews/drug abuse; (10) education and health programs; (11) volunteer programs; (12) chaplain programs; (13) mass media campaigns; (14) community sensitization programs; (15) rehabilitation and reintegration of ex-convicts; (16) resolving ethnic conflicts; (17) resolving boundary disputes.',
    markingPoints: [
      'Award 0.5 marks per valid activity up to 8 activities (total 4 marks)',
      'Must name activities recognized in the 17-item curriculum list',
    ],
  },
  {
    id: 'q5-4',
    topicId: 'activities',
    topicName: 'Community Policing Activities',
    questionNumber: 38,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain the concept of "shared responsibility" in community policing.',
    modelAnswer:
      'Community policing recognizes the independence and shared responsibility of the police and community in ensuring a safe and secure environment — both parties jointly identify problems and jointly design solutions, rather than the police acting alone.',
    markingPoints: [
      'Recognition of interdependence between police and community',
      'Security is not the exclusive domain of police',
      'Both parties jointly identify problems and design appropriate solutions',
    ],
  },
  {
    id: 'q5-5',
    topicId: 'activities',
    topicName: 'Community Policing Activities',
    questionNumber: 39,
    questionType: 'distinguish',
    marks: 4,
    questionText: 'Differentiate "neighbourhood watch" from "open police days" as community policing activities.',
    modelAnswer:
      'Neighbourhood watch is a resident-led vigilance activity where community members monitor their own area for suspicious activity, whereas open police days are events organized by police to interact openly with the public, build rapport and share information.',
    markingPoints: [
      'Neighbourhood watch (2 mks): Resident-driven vigilance/monitoring of local areas against suspicious acts',
      'Open police days (2 mks): Police-organized interactive forum to demystify police stations, build rapport, and share public security info',
    ],
  },
  {
    id: 'q5-6',
    topicId: 'activities',
    topicName: 'Community Policing Activities',
    questionNumber: 40,
    questionType: 'explain',
    marks: 3,
    questionText: 'Why is "rehabilitation and reintegration of ex-convicts" considered a community policing activity?',
    modelAnswer:
      'Because community policing addresses the underlying causes of crime and social disorder, and helping ex-convicts reintegrate reduces re-offending and restores social cohesion — core goals of the strategy.',
    markingPoints: [
      'Addresses underlying root causes of crime and recidivism',
      'Helps former offenders reintegrate into productive community life',
      'Reduces re-offending and restores social cohesion',
    ],
  },
  {
    id: 'q5-7',
    topicId: 'activities',
    topicName: 'Community Policing Activities',
    questionNumber: 41,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain why community policing is described as being based on "joint problem identification and problem-solving."',
    modelAnswer:
      'Effective solutions require both the police, who bring security expertise, and the community, who understand local conditions best, to jointly diagnose the problem and design a response, rather than either party acting unilaterally.',
    markingPoints: [
      'Police bring professional law enforcement expertise and statutory powers',
      'Community brings on-the-ground local knowledge of criminal patterns and underlying grievances',
      'Unilateral policing is ineffective compared to combined diagnostic solutions',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 6: Community Partnership & 4Cs
  // -------------------------------------------------------------
  {
    id: 'q6-1',
    topicId: 'partnership-4cs',
    topicName: 'Community Partnership & 4Cs',
    questionNumber: 42,
    questionType: 'list',
    marks: 3,
    questionText: 'Name the three main components of community policing.',
    modelAnswer:
      'The three main components are: (1) Community Partnership; (2) Problem Solving; (3) Change Management.',
    markingPoints: [
      'Community Partnership (1 mk)',
      'Problem Solving (1 mk)',
      'Change Management (1 mk)',
    ],
  },
  {
    id: 'q6-2',
    topicId: 'partnership-4cs',
    topicName: 'Community Partnership & 4Cs',
    questionNumber: 43,
    questionType: 'list',
    marks: 4,
    questionText: 'List the "4 Cs" through which partnership is realized in community policing.',
    modelAnswer:
      'The 4 Cs are: Cooperation, Collaboration, Communication, and Commitment.',
    markingPoints: [
      'Cooperation (1 mk)',
      'Collaboration (1 mk)',
      'Communication (1 mk)',
      'Commitment (1 mk)',
    ],
  },
  {
    id: 'q6-3',
    topicId: 'partnership-4cs',
    topicName: 'Community Partnership & 4Cs',
    questionNumber: 44,
    questionType: 'define',
    marks: 2,
    questionText: 'Define "Collaboration" as one of the 4 Cs of partnership.',
    modelAnswer:
      'Collaboration is a cooperative effort by members of a group to achieve a common goal.',
    markingPoints: [
      'Cooperative effort by members of a group',
      'Working toward achieving a common/shared goal',
    ],
  },
  {
    id: 'q6-4',
    topicId: 'partnership-4cs',
    topicName: 'Community Partnership & 4Cs',
    questionNumber: 45,
    questionType: 'state',
    marks: 4,
    questionText: 'State any four ways of improving cooperation between police and community.',
    modelAnswer:
      'Any four of: (1) lead by example; (2) build trust; (3) encourage socialization; (4) set defined goals; (5) recognize good work; (6) be open in communication.',
    markingPoints: [
      'Lead by example',
      'Build trust',
      'Encourage socialization',
      'Set defined goals',
      'Recognize good work',
      'Be open in communication',
      '(1 mk each, max 4 marks)',
    ],
  },
  {
    id: 'q6-5',
    topicId: 'partnership-4cs',
    topicName: 'Community Partnership & 4Cs',
    questionNumber: 46,
    questionType: 'list',
    marks: 3,
    questionText: 'State the three types of partnership identified in the manual.',
    modelAnswer:
      '(1) Partnership among community-based non-profit organizations; (2) Cross-sector partnership (e.g. non-profit and business sector, government and academic sector); (3) Partnership between donor organizations and recipients.',
    markingPoints: [
      'Partnership among community-based non-profit organizations',
      'Cross-sector partnership (e.g. business, government, academia, non-profit)',
      'Partnership between donor organizations and recipients',
    ],
  },
  {
    id: 'q6-6',
    topicId: 'partnership-4cs',
    topicName: 'Community Partnership & 4Cs',
    questionNumber: 47,
    questionType: 'short',
    marks: 2,
    questionText: 'What is the central goal of community partnership according to the manual?',
    modelAnswer:
      'Establishing and maintaining mutual trust between police and the community.',
    markingPoints: [
      'Establishing and maintaining mutual trust between police and community',
    ],
  },
  {
    id: 'q6-7',
    topicId: 'partnership-4cs',
    topicName: 'Community Partnership & 4Cs',
    questionNumber: 48,
    questionType: 'distinguish',
    marks: 4,
    questionText: 'Distinguish between "Cooperation" and "Collaboration" as used in community partnership.',
    modelAnswer:
      'Cooperation refers to mutual support, teamwork, and trust-building where parties assist one another; Collaboration is a joint cooperative effort where group members actively work together as partners to achieve a common goal.',
    markingPoints: [
      'Cooperation: mutual support, willingness to assist, teamwork and trust building',
      'Collaboration: structured cooperative effort working jointly toward a common objective',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 7: Problem Solving & SARA
  // -------------------------------------------------------------
  {
    id: 'q7-1',
    topicId: 'problem-solving-sara',
    topicName: 'Problem Solving & SARA',
    questionNumber: 49,
    questionType: 'define',
    marks: 3,
    questionText: 'Define "Problem" as used in problem-oriented policing.',
    modelAnswer:
      'A recurring set of related harmful events in a community, or events that members of the public expect the police to address.',
    markingPoints: [
      'Recurring set of related harmful events in a community',
      'Events that members of the public expect the police to address',
    ],
  },
  {
    id: 'q7-2',
    topicId: 'problem-solving-sara',
    topicName: 'Problem Solving & SARA',
    questionNumber: 50,
    questionType: 'explain',
    marks: 4,
    questionText: 'Explain the S.A.R.A. model of problem solving, describing each stage.',
    modelAnswer:
      'Scanning — identifying and describing the crime/disorder problem. Analysis — assessing how big the problem is, who is affected, and underlying causes. Response — devising and implementing an appropriate response, often jointly with the community. Assessment — evaluating the results, re-analyzing or devising another response if unsatisfactory.',
    markingPoints: [
      'Scanning: identifying and prioritizing the recurring problem (1 mk)',
      'Analysis: in-depth investigation into causes, scope, actors, and location (1 mk)',
      'Response: designing and executing creative interventions with community (1 mk)',
      'Assessment: evaluating effectiveness and determining if adjustments are needed (1 mk)',
    ],
  },
  {
    id: 'q7-3',
    topicId: 'problem-solving-sara',
    topicName: 'Problem Solving & SARA',
    questionNumber: 51,
    questionType: 'state',
    marks: 4,
    questionText: 'State any four outcomes that problem solving can achieve.',
    modelAnswer:
      '(1) Eliminating the problem entirely; (2) Reducing the number of occurrences; (3) Reducing the degree of injury per incident; (4) Improving problem handling.',
    markingPoints: [
      'Eliminating the problem entirely (1 mk)',
      'Reducing the number of occurrences (1 mk)',
      'Reducing the degree of injury/harm per incident (1 mk)',
      'Improving problem handling/response (1 mk)',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 8: Change Management
  // -------------------------------------------------------------
  {
    id: 'q8-1',
    topicId: 'change-management',
    topicName: 'Change Management',
    questionNumber: 52,
    questionType: 'explain',
    marks: 4,
    questionText: 'Explain why "change management" is necessary for the successful adoption of community policing.',
    modelAnswer:
      'Community policing requires fundamental and comprehensive change to the police service to accommodate increased community involvement; without deliberate change management — recognizing the need for change, communicating a clear vision, identifying concrete steps, understanding benefits, and building organization-wide commitment — the shift will fail.',
    markingPoints: [
      'Fundamental institutional transformation required to accommodate community involvement',
      'Need to overcome entrenched traditional bureaucratic and reactive mindsets',
      'Requires recognizing need, communicating clear vision, executing concrete steps, and securing organizational commitment',
    ],
  },
  {
    id: 'q8-2',
    topicId: 'change-management',
    topicName: 'Change Management',
    questionNumber: 53,
    questionType: 'distinguish',
    marks: 3,
    questionText: 'Distinguish traditional policing from community policing in terms of information sharing.',
    modelAnswer:
      'In traditional policing, police, government agencies and citizens are reluctant to share information; in community policing, all parties recognize the value of sharing information as key to joint problem-solving.',
    markingPoints: [
      'Traditional policing: Reluctance/secrecy among police, agencies, and citizens in sharing info',
      'Community policing: Active bilateral information flow recognized as vital for proactive problem-solving',
    ],
  },
  {
    id: 'q8-3',
    topicId: 'change-management',
    topicName: 'Change Management',
    questionNumber: 54,
    questionType: 'distinguish',
    marks: 3,
    questionText: 'Distinguish traditional policing from community policing in terms of the "tool" used to solve problems.',
    modelAnswer:
      'In traditional policing, arrest is the primary tool; in community policing, there are additional tools used to solve problems beyond arrest.',
    markingPoints: [
      'Traditional policing: Arrest and criminal prosecution are the primary/exclusive tools',
      'Community policing: Multidimensional tools used beyond arrest (dialogue, mediation, youth programs, environmental design, economic referrals)',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 9: Stakeholders & Their Roles
  // -------------------------------------------------------------
  {
    id: 'q9-1',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 55,
    questionType: 'define',
    marks: 2,
    questionText: 'Define a "stakeholder" in the context of community policing.',
    modelAnswer:
      'A person with an interest, influence or concern in community policing.',
    markingPoints: [
      'Person/entity with an interest, influence, or concern in community policing',
    ],
  },
  {
    id: 'q9-2',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 56,
    questionType: 'list',
    marks: 3,
    questionText: 'List any six categories of stakeholders in community policing.',
    modelAnswer:
      'Any six of: (1) National Police Service; (2) the community/general public; (3) Government Policing Agencies (GPAs); (4) religious groups/FBOs; (5) CBOs; (6) NGOs; (7) the media; (8) learning institutions; (9) youths; (10) women; (11) the private sector; (12) private security industries (e.g. G4S).',
    markingPoints: [
      '0.5 marks per valid stakeholder category up to 6 categories (total 3 marks)',
    ],
  },
  {
    id: 'q9-3',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 57,
    questionType: 'state',
    marks: 4,
    questionText: 'State any four roles of the community in community policing.',
    modelAnswer:
      'Any four of: (1) creating an enabling environment for GPAs; (2) encouraging greater social contact and development between neighbours; (3) embracing the importance of safety/security of persons and property; (4) creating a gender-sensitive environment for greater participation.',
    markingPoints: [
      'Creating an enabling environment for GPAs',
      'Encouraging social contact and development between neighbours',
      'Embracing importance of safety/security of persons and property',
      'Creating gender-sensitive environment for participation',
      '(1 mk each, max 4 marks)',
    ],
  },
  {
    id: 'q9-4',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 58,
    questionType: 'state',
    marks: 5,
    questionText: 'State any five roles of Government Policing Agencies (GPAs) in community policing.',
    modelAnswer:
      'Any five of: (1) mainstream community policing in all operations; (2) establish and maintain dialogue with the community; (3) enhance inter-agency cooperation; (4) offer prompt response to calls for service; (5) nurture transparency, accountability and effectiveness; (6) intensify beats and patrols; (7) establish mutual feedback mechanisms; (8) maintain professionalism; (9) provide officers to CP committees; (10) maintain law and order; (11) update committees on emerging crime patterns; (12) give technical support to Nyumba Kumi clusters.',
    markingPoints: [
      '1 mark each for any 5 valid GPA roles (max 5 marks)',
    ],
  },
  {
    id: 'q9-5',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 59,
    questionType: 'state',
    marks: 4,
    questionText: 'State any four roles of citizens in community policing.',
    modelAnswer:
      'Any four of: (1) be at the centre of decision-making within the cluster; (2) be vigilant on security; (3) balance own rights of privacy/association with the role of Nyumba Kumi; (4) be an active participant in socio-economic order; (5) be a partner with GPAs in crime prevention; (6) understand and obey the law; (7) promote internal democracy and good governance; (8) enhance patriotism; (9) participate in safeguarding peace and unity.',
    markingPoints: [
      '1 mark each for any 4 valid citizen roles (max 4 marks)',
    ],
  },
  {
    id: 'q9-6',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 60,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain any three roles of the media in community policing.',
    modelAnswer:
      'Any three of: (1) educating the public on the importance of community policing; (2) raising awareness on crime trends; (3) marketing the Kenyan model of community policing; (4) keeping communities informed; (5) putting checks and balances on effective implementation; (6) undertaking research on community policing; (7) exercising oversight function on operationalization.',
    markingPoints: [
      'Educating the public / raising awareness',
      'Marketing Kenyan model of CP and keeping communities informed',
      'Watchdog/oversight: checks and balances on effective implementation',
      '(1 mark each, max 3 marks)',
    ],
  },
  {
    id: 'q9-7',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 61,
    questionType: 'state',
    marks: 5,
    questionText: 'State any five roles of the police in community policing.',
    modelAnswer:
      'Any five of: (1) understanding the concept of community policing; (2) communicating with the community; (3) giving feedback; (4) listening and understanding public needs; (5) being problem solvers; (6) being transparent, accountable and effective; (7) being professional; (8) helping form CPFs/CPCs; (9) maintaining law and order; (10) enforcing law and order; (11) patrolling beat areas effectively.',
    markingPoints: [
      '1 mark each for any 5 valid police roles (max 5 marks)',
    ],
  },
  {
    id: 'q9-8',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 62,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain why "youths" and "women" are specifically identified as distinct stakeholder categories rather than being subsumed under "the community."',
    modelAnswer:
      'They represent groups with distinct interests, vulnerabilities and potential contributions that could otherwise be overlooked in general community engagement; explicit inclusion ensures gender-sensitivity and youth participation are deliberately built into community policing structures and decision-making.',
    markingPoints: [
      'Represent distinct interests, vulnerabilities, and unique perspectives',
      'Risk being marginalized or overlooked in generic community meetings',
      'Deliberately embeds gender-sensitivity and youth empowerment into security architecture',
    ],
  },
  {
    id: 'q9-9',
    topicId: 'stakeholders',
    topicName: 'Stakeholders & Their Roles',
    questionNumber: 63,
    questionType: 'scenario',
    marks: 3,
    questionText: 'A private security firm participates in a joint patrol with police and a local Nyumba Kumi cluster. Identify the stakeholder category it falls under and justify.',
    modelAnswer:
      'Private Security Industries — a recognized stakeholder category, because it has a direct interest and operational role in community security alongside the police and the public.',
    markingPoints: [
      'Category: Private Security Industries (1 mk)',
      'Justification: Possesses guard personnel, electronic surveillance, and direct operational interest in securing neighbourhoods in complement to police (2 mks)',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 10: Community Policing Structures (CPF & CPC)
  // -------------------------------------------------------------
  {
    id: 'q10-1',
    topicId: 'structures-cpf-cpc',
    topicName: 'Community Policing Structures',
    questionNumber: 64,
    questionType: 'define',
    marks: 3,
    questionText: 'Define a Community Policing Forum (CPF).',
    modelAnswer:
      'A group of people from the police and representatives of local community members/committees (local leaders, residents, community-based organizations) who meet to identify and solve problems in their areas.',
    markingPoints: [
      'Group comprising police officers and local community representatives (leaders, residents, CBOs)',
      'Meet to identify and solve security problems in their area',
    ],
  },
  {
    id: 'q10-2',
    topicId: 'structures-cpf-cpc',
    topicName: 'Community Policing Structures',
    questionNumber: 65,
    questionType: 'state',
    marks: 4,
    questionText: 'State any four roles of a community policing forum.',
    modelAnswer:
      'Any four of: (1) provides oversight/space for communities to raise security concerns to government; (2) provides a platform for follow-up and feedback; (3) provides a forum for exchange of ideas/information on security matters; (4) provides a forum for gathering criminal intelligence for crime prevention; (5) sensitizes public/police on safeguarding informer identity; (6) fosters good understanding and working relations between police and public.',
    markingPoints: [
      'Provides oversight/platform to raise concerns to government',
      'Facilitates follow-up and feedback',
      'Forum for exchanging ideas/information',
      'Gathers criminal intelligence for crime prevention',
      'Sensitizes public and police on informant protection',
      'Fosters good working relations and trust',
      '(1 mark each, max 4 marks)',
    ],
  },
  {
    id: 'q10-3',
    topicId: 'structures-cpf-cpc',
    topicName: 'Community Policing Structures',
    questionNumber: 66,
    questionType: 'law',
    marks: 3,
    questionText: 'Give the statutory definition of a "Community Policing Committee" under Section 2 NPSA 2011.',
    modelAnswer:
      'A committee elected by a community policing forum in accordance with Section 98(4), for purposes of coordinating, leading and representing the forum.',
    markingPoints: [
      'Committee elected by a community policing forum',
      'Elected in accordance with Section 98(4) of NPSA 2011',
      'Purpose: coordinating, leading, and representing the forum',
    ],
  },
  {
    id: 'q10-4',
    topicId: 'structures-cpf-cpc',
    topicName: 'Community Policing Structures',
    questionNumber: 67,
    questionType: 'explain',
    marks: 3,
    questionText: 'What qualities should members of a community policing committee possess?',
    modelAnswer:
      'High integrity, high standing/respect within the community, and the committee should be balanced to represent elders, youth, persons with disabilities, and women.',
    markingPoints: [
      'High integrity and unquestionable character',
      'High standing and respect within the community',
      'Balanced demographic representation (elders, youth, persons with disabilities, women)',
    ],
  },
  {
    id: 'q10-5',
    topicId: 'structures-cpf-cpc',
    topicName: 'Community Policing Structures',
    questionNumber: 68,
    questionType: 'state',
    marks: 3,
    questionText: 'State the three functions of the community policing committee.',
    modelAnswer:
      '(1) Determine the community\'s expectations and prioritize matters of interest; (2) Develop and implement the community policing program; (3) Monitor and evaluate program activities.',
    markingPoints: [
      'Determine community expectations and prioritize matters of interest (1 mk)',
      'Develop and implement community policing program (1 mk)',
      'Monitor and evaluate program activities (1 mk)',
    ],
  },
  {
    id: 'q10-6',
    topicId: 'structures-cpf-cpc',
    topicName: 'Community Policing Structures',
    questionNumber: 69,
    questionType: 'distinguish',
    marks: 4,
    questionText: 'Distinguish between a Community Policing Forum and a Community Policing Committee.',
    modelAnswer:
      'A CPF is the broader body of police and community representatives who meet to identify and solve area problems; a Community Policing Committee is a smaller executive body elected by the forum specifically to coordinate, lead and represent it.',
    markingPoints: [
      'CPF (2 mks): Broader general assembly/body of police and community representatives meeting for problem identification',
      'CPC (2 mks): Smaller executive committee elected by the CPF to lead, coordinate, and represent it',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 11: Nyumba Kumi / Usalama wa Msingi
  // -------------------------------------------------------------
  {
    id: 'q11-1',
    topicId: 'nyumba-kumi',
    topicName: 'Nyumba Kumi / Usalama wa Msingi',
    questionNumber: 70,
    questionType: 'explain',
    marks: 4,
    questionText: 'Explain the concept of "Usalama Wa Msingi" (Nyumba Kumi Initiative).',
    modelAnswer:
      'A strategy of anchoring community policing at the household level or any generic cluster (residential court, estate, block of houses, manyatta, street, market centre, gated community, village), aimed at bringing Kenyans together in clusters defined by physical location, felt needs and pursuit of common ideals for a safe, sustainable and prosperous neighbourhood.',
    markingPoints: [
      'Strategy anchoring community policing at household / basic cluster level',
      'Applies to diverse clusters (courts, estates, blocks, manyattas, streets, villages, markets)',
      'Brings Kenyans together based on physical location, felt needs, and common ideals',
      'Creates safe, sustainable, and prosperous neighbourhoods',
    ],
  },
  {
    id: 'q11-2',
    topicId: 'nyumba-kumi',
    topicName: 'Nyumba Kumi / Usalama wa Msingi',
    questionNumber: 71,
    questionType: 'explain',
    marks: 3,
    questionText: 'Why was the name "Usalama Wa Msingi" adopted instead of rigidly using "Nyumba Kumi" (ten households)?',
    modelAnswer:
      'Because the concept is not to be rigidly based on a specific number of households — the number should be determined by shared aspirations rather than imposed externally — so "usalama wa msingi" (basic security) better reflects this flexibility, ultimately forming "msingi wa usalama wa nchi" (the foundation of national security).',
    markingPoints: [
      'Cluster size should not be rigidly constrained to exactly 10 households',
      'Determined flexibly by shared geographic reality and common aspirations',
      'Reflects "basic security" forming the fundamental brick of national security ("msingi wa usalama wa nchi")',
    ],
  },
  {
    id: 'q11-3',
    topicId: 'nyumba-kumi',
    topicName: 'Nyumba Kumi / Usalama wa Msingi',
    questionNumber: 72,
    questionType: 'list',
    marks: 4,
    questionText: 'List any five categories of members comprising a Nyumba Kumi cluster.',
    modelAnswer:
      'Any five of: (1) members of the public (ethnic balancing, gender); (2) leaders representing available religions; (3) business persons; (4) county government representatives; (5) government policing agencies from various departments; (6) other members co-opted on specialized grounds.',
    markingPoints: [
      'Members of the public (with gender and ethnic balance)',
      'Religious leaders representing local faiths',
      'Local business persons',
      'County government representatives',
      'Government policing agencies (GPAs)',
      'Co-opted members with specialized expertise',
      '(0.8 to 1 mk each, max 4 marks)',
    ],
  },
  {
    id: 'q11-4',
    topicId: 'nyumba-kumi',
    topicName: 'Nyumba Kumi / Usalama wa Msingi',
    questionNumber: 73,
    questionType: 'state',
    marks: 6,
    questionText: 'State any six functions of the Nyumba Kumi Committee.',
    modelAnswer:
      'Any six of: (1) sharing information among members; (2) identifying problems that could give rise to crime/disorder; (3) prioritizing security needs; (4) joint strategic planning; (5) prioritizing other social development needs; (6) acting on pro-active processes to prevent crime; (7) jointly solving problems; (8) reporting to horizontal/vertical committees; (9) designing feedback systems; (10) establishing mechanisms to eliminate corruption and enhance democracy/accountability/transparency.',
    markingPoints: [
      '1 mark per function up to 6 functions (max 6 marks)',
    ],
  },
  {
    id: 'q11-5',
    topicId: 'nyumba-kumi',
    topicName: 'Nyumba Kumi / Usalama wa Msingi',
    questionNumber: 74,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain the reporting relationship of the Nyumba Kumi Committee to higher committees.',
    modelAnswer:
      'It reports to horizontal and vertical committees for action; where action has already been taken at its own level, the report to the relevant higher committee is for information only.',
    markingPoints: [
      'Reports to horizontal and vertical committees for necessary action',
      'Where issue is resolved locally, report is submitted for information only',
      'Maintains transparent chain of intelligence and accountability',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 12: County Policing Authority
  // -------------------------------------------------------------
  {
    id: 'q12-1',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 75,
    questionType: 'law',
    marks: 2,
    questionText: 'Under which statutory provisions and regulations is the County Policing Authority established?',
    modelAnswer:
      'Sections 41 to 47 and Section 97 of the National Police Service Act, 2011 (operationalized under Legal Notice 114 of 2015 and Service Standing Orders 2017).',
    markingPoints: [
      'NPSA 2011: Sections 41 to 47 and Section 97',
      'Legal Notice No. 114 of 2015 / SSO 2017',
    ],
  },
  {
    id: 'q12-2',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 76,
    questionType: 'short',
    marks: 3,
    questionText: 'Who chairs the County Policing Authority, and who may chair in the chairperson\'s absence?',
    modelAnswer:
      'The Governor chairs the Authority; the Governor may authorise the Deputy Governor to chair meetings in his/her absence, and in the absence of the chairperson, members may elect one of their own to chair a meeting.',
    markingPoints: [
      'Chairperson: The County Governor (1 mk)',
      'Absence: Deputy Governor (authorized by Governor) (1 mk)',
      'Both absent: Members elect one of their own to chair the meeting (1 mk)',
    ],
  },
  {
    id: 'q12-3',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 77,
    questionType: 'list',
    marks: 4,
    questionText: 'List the categories of persons from among whom the Governor appoints at least six other members under Section 41(1)(f).',
    modelAnswer:
      'The six categories are: (1) the business sector; (2) community-based organizations; (3) women; (4) persons with special needs; (5) religious organizations; (6) the youth.',
    markingPoints: [
      'Business sector',
      'Community-based organizations (CBOs)',
      'Women',
      'Persons with special needs',
      'Religious organizations',
      'The youth',
      '(0.5 to 1 mk each, max 4 marks)',
    ],
  },
  {
    id: 'q12-4',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 78,
    questionType: 'law',
    marks: 3,
    questionText: 'State any three grounds that disqualify a person from appointment as a member of the County Policing Authority.',
    modelAnswer:
      'Any three of: (1) has violated the Constitution; (2) is adjudged bankrupt; (3) is not of good character or moral standing; (4) has been convicted of a felony; (5) has not been resident or employed in the county for a continuous period of not less than three years.',
    markingPoints: [
      'Violation of the Constitution',
      'Adjudged bankrupt',
      'Not of good character or moral standing / Chapter 6 breach',
      'Convicted of a felony',
      'Not resident/employed in county for at least 3 continuous years',
      '(1 mark each, max 3 marks)',
    ],
  },
  {
    id: 'q12-5',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 79,
    questionType: 'short',
    marks: 2,
    questionText: 'What is the term of office for members appointed under Section 41(1)(e)/(f), and can they be reappointed?',
    modelAnswer:
      'Two years, and they are eligible for reappointment for one further term.',
    markingPoints: [
      'Term: Two (2) years',
      'Reappointment: Eligible for one further term only',
    ],
  },
  {
    id: 'q12-6',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 80,
    questionType: 'law',
    marks: 5,
    questionText: 'State any five functions of the County Policing Authority under Section 41(9).',
    modelAnswer:
      'Any five of: (1) develop proposals on priorities for police performance in the county; (2) monitor trends and patterns of crime including impact on women and children; (3) monitor progress and achievement of set targets; (4) provide oversight of the budget of county policing authority funds; (5) provide feedback on police performance at county level; (6) provide a platform for public participation; (7) ensure policing accountability to the public; (8) receive reports from CP Forums and Committees; (9) ensure compliance with national policing standards.',
    markingPoints: [
      '1 mark each for any 5 valid functions under Sec 41(9) (max 5 marks)',
    ],
  },
  {
    id: 'q12-7',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 81,
    questionType: 'short',
    marks: 3,
    questionText: 'How often must the County Policing Authority meet, and what constitutes a quorum?',
    modelAnswer:
      'At least once every three months; quorum is fifty per cent (50%) of the total members.',
    markingPoints: [
      'Meeting frequency: At least once every three months (quarterly) (1.5 mks)',
      'Quorum: Fifty per cent (50%) of total members (1.5 mks)',
    ],
  },
  {
    id: 'q12-8',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 82,
    questionType: 'short',
    marks: 2,
    questionText: 'Who bears the expenses of the County Policing Authority?',
    modelAnswer:
      'The National Police Service (the Service).',
    markingPoints: [
      'The National Police Service (the Service)',
    ],
  },
  {
    id: 'q12-9',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 83,
    questionType: 'law',
    marks: 3,
    questionText: 'State any three matters in which the County Policing Authority is NOT permitted to interfere, under Section 41(13).',
    modelAnswer:
      'Any three of: (1) investigation of any particular offence(s); (2) enforcement operations of the law against any particular person(s); (3) employment, assignment, promotion, suspension or dismissal of any member of the Service; (4) the operations of the Service.',
    markingPoints: [
      'Investigation of any particular offence(s)',
      'Enforcement operations against specific individuals',
      'Employment, assignment, promotion, disciplinary action or dismissal of officers',
      'Direct operations of the Service',
      '(1 mark each, max 3 marks)',
    ],
  },
  {
    id: 'q12-10',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 84,
    questionType: 'explain',
    marks: 5,
    questionText: 'Describe the nomination procedure for members under Section 41(1)(f), from advertisement to appointment.',
    modelAnswer:
      'The County Public Service Board advertises the vacancy in a newspaper of wide circulation; shortlists, interviews and submits qualified persons to the Governor; approved names go to the County Security Committee then the County Assembly for vetting/approval; where approved, the Speaker forwards names to the Governor, who appoints by Gazette notice; where rejected, fresh nominations follow the same process.',
    markingPoints: [
      '1. County Public Service Board advertises vacancy in newspaper of wide circulation',
      '2. Shortlists, interviews, and submits qualified list to the Governor',
      '3. Governor submits names to County Security Committee & County Assembly',
      '4. County Assembly vets and approves nominees',
      '5. Speaker transmits approved names to Governor for appointment by Gazette notice',
    ],
  },
  {
    id: 'q12-11',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 85,
    questionType: 'law',
    marks: 4,
    questionText: 'State any four grounds upon which a member of the County Policing Authority may be removed from office.',
    modelAnswer:
      'Any four of: (1) inability to perform duties due to mental/physical incapacity; (2) violation of the Constitution; (3) bankruptcy; (4) incompetence; (5) conviction of a felony with imprisonment exceeding six months; (6) gross misconduct or misbehaviour; (7) any other justifiable cause or court order.',
    markingPoints: [
      'Mental or physical incapacity',
      'Violation of the Constitution',
      'Bankruptcy',
      'Incompetence',
      'Conviction of felony with sentence > 6 months',
      'Gross misconduct or misbehaviour',
      '(1 mark each, max 4 marks)',
    ],
  },
  {
    id: 'q12-12',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 86,
    questionType: 'explain',
    marks: 4,
    questionText: 'Outline the procedure for removal of a County Policing Authority member (other than the chairperson).',
    modelAnswer:
      'A petition setting out alleged facts is presented to the Governor; the Governor investigates and considers the evidence if satisfied a valid ground is disclosed; if founded, the Governor removes the member; if frivolous, the allegation is dismissed and the member informed; a dissatisfied member may seek review by the Cabinet Secretary, who may vary or affirm the Governor\'s decision.',
    markingPoints: [
      'Petition setting out facts presented to Governor',
      'Governor investigates and evaluates evidence',
      'If founded: Governor orders removal; if frivolous: dismissed',
      'Appeals/Review: Dissatisfied member may petition Cabinet Secretary for review',
    ],
  },
  {
    id: 'q12-13',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 87,
    questionType: 'law',
    marks: 4,
    questionText: 'Under Section 97 NPSA 2011, what is the role of the County Policing Authority in community policing?',
    modelAnswer:
      'To establish structures to implement community policing throughout the county; implement community policing policies/guidelines; facilitate training of community policing members; receive reports from local community policing structures; prepare county community policing reports for submission to the Cabinet Secretary.',
    markingPoints: [
      'Establish community policing implementation structures county-wide',
      'Implement policies and guidelines',
      'Facilitate training of CP members',
      'Receive local reports and submit county reports to Cabinet Secretary',
    ],
  },
  {
    id: 'q12-14',
    topicId: 'county-policing-authority',
    topicName: 'County Policing Authority',
    questionNumber: 88,
    questionType: 'short',
    marks: 3,
    questionText: 'When does the office of a member of the County Policing Authority become vacant?',
    modelAnswer:
      'Upon death; resignation by written notice to the chairperson; or removal from office in accordance with the Guidelines.',
    markingPoints: [
      'Death (1 mk)',
      'Resignation by written notice to chairperson (1 mk)',
      'Removal in accordance with Guidelines (1 mk)',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 13: Implementation of Community Policing
  // -------------------------------------------------------------
  {
    id: 'q13-1',
    topicId: 'implementation-sequence',
    topicName: 'Implementation of Community Policing',
    questionNumber: 89,
    questionType: 'list',
    marks: 4,
    questionText: 'List the seven steps in the sequence of implementing community policing in correct order.',
    modelAnswer:
      'The seven steps in order are: (1) Creating Contact; (2) Initial Public Meeting; (3) Consultation; (4) Adoption; (5) Launching; (6) Mobilization; (7) Monitoring and Evaluation.',
    markingPoints: [
      '1. Creating Contact',
      '2. Initial Public Meeting',
      '3. Consultation',
      '4. Adoption',
      '5. Launching',
      '6. Mobilization',
      '7. Monitoring and Evaluation',
      '(Award 4 marks for full correct sequence; 2 marks for partially ordered)',
    ],
  },
  {
    id: 'q13-2',
    topicId: 'implementation-sequence',
    topicName: 'Implementation of Community Policing',
    questionNumber: 90,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain what happens at the "Consultation" stage of implementing community policing.',
    modelAnswer:
      'Consultative committees (Community Policing Forums) made up of police officers and community representatives are formed to exchange information on how best the "job" can be done, with active listening required on the part of the police.',
    markingPoints: [
      'Formation of consultative committees / Community Policing Forums',
      'Police officers and community reps exchange ideas on how best to tackle insecurity',
      'Police exercise active listening and dialogue rather than prescribing directives',
    ],
  },
  {
    id: 'q13-3',
    topicId: 'implementation-sequence',
    topicName: 'Implementation of Community Policing',
    questionNumber: 91,
    questionType: 'short',
    marks: 2,
    questionText: 'What is produced at the "Adoption" stage, and what must it align with?',
    modelAnswer:
      'An Action Plan formulated from the views gathered, which must be in line with the legal mandate of the police.',
    markingPoints: [
      'Product: An Action Plan formulated from public views gathered (1 mk)',
      'Alignment: Must be in line with the statutory/legal mandate of the police (1 mk)',
    ],
  },
  {
    id: 'q13-4',
    topicId: 'implementation-sequence',
    topicName: 'Implementation of Community Policing',
    questionNumber: 92,
    questionType: 'explain',
    marks: 4,
    questionText: 'Describe activities undertaken at the "Mobilization" stage.',
    modelAnswer:
      'Putting the action plan into action, e.g. foot patrols, problem-solving, information gathering, victim counselling, community organizing, education, walk-and-ride and knock-on-door programs, specialized patrols, and rapid response teams.',
    markingPoints: [
      'Executing the Action Plan on the ground',
      'Examples: Foot patrols, walk-and-ride, knock-on-door programs',
      'Information gathering, victim counselling, rapid response teams',
      'Community organizing and education sessions',
    ],
  },
  {
    id: 'q13-5',
    topicId: 'implementation-sequence',
    topicName: 'Implementation of Community Policing',
    questionNumber: 93,
    questionType: 'explain',
    marks: 3,
    questionText: 'Explain why "monitoring and evaluation" is a necessary final step, rather than an optional add-on.',
    modelAnswer:
      'Crime statistics must be monitored before and after implementation to gauge effect, and open meetings held to discuss progress — without this, there is no way to know whether the scheme is achieving its objectives or needs adjustment.',
    markingPoints: [
      'Compares crime statistics before and after implementation to measure impact',
      'Provides platform for feedback and community progress meetings',
      'Identifies gaps so strategies can be refined and sustained',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 14: Challenges
  // -------------------------------------------------------------
  {
    id: 'q14-1',
    topicId: 'challenges',
    topicName: 'Challenges',
    questionNumber: 94,
    questionType: 'state',
    marks: 5,
    questionText: 'State any five challenges encountered in implementing community policing in Kenya.',
    modelAnswer:
      'Any five of: (1) lack of clear guidelines on police/community roles; (2) misconception of the concept leading to vigilante groups; (3) some viewing it as employment and withdrawing when they realize it is voluntary; (4) poor linkage among stakeholders; (5) misconception that participants are police informers; (6) slow mainstreaming into police work; (7) poor trust between police and communities; (8) lack of training in the curriculum up to 2010; (9) inadequate training of officers; (10) lack of shared expectations; (11) poor public awareness; (12) lack of motivation among community members.',
    markingPoints: [
      '1 mark per clearly articulated challenge up to 5 (max 5 marks)',
    ],
  },
  {
    id: 'q14-2',
    topicId: 'challenges',
    topicName: 'Challenges',
    questionNumber: 95,
    questionType: 'scenario',
    marks: 4,
    questionText: '"Poor trust between police and the communities they serve" is listed as a challenge. Explain how this contradicts a core principle of community policing.',
    modelAnswer:
      'It directly undermines the trust-oriented principle, which holds that trust encourages active citizen participation in information sharing; without trust, communities will not cooperate, and the joint problem-identification/problem-solving that defines community policing collapses.',
    markingPoints: [
      'Violates the Trust-Oriented Principle of community policing',
      'Without trust, civilians fear victimization and conceal criminal intelligence',
      'Destroys the prerequisite for joint diagnosis and shared problem-solving',
    ],
  },

  // -------------------------------------------------------------
  // TOPIC 15: Benefits
  // -------------------------------------------------------------
  {
    id: 'q15-1',
    topicId: 'benefits',
    topicName: 'Benefits',
    questionNumber: 96,
    questionType: 'state',
    marks: 4,
    questionText: 'State any four community-specific benefits of community policing.',
    modelAnswer:
      'Any four of: (1) improved police accountability to the community; (2) mobilization/empowerment of communities to identify and respond to security concerns; (3) reduced fear of crime; (4) increased positive attitude towards police; (5) improved local physical and social environment.',
    markingPoints: [
      'Improved police accountability to the community',
      'Empowerment of community to identify and respond to security concerns',
      'Reduced fear of crime in the neighbourhood',
      'Increased positive attitude towards police service',
      'Improved local physical and social environment',
      '(1 mark each, max 4 marks)',
    ],
  },
  {
    id: 'q15-2',
    topicId: 'benefits',
    topicName: 'Benefits',
    questionNumber: 97,
    questionType: 'state',
    marks: 3,
    questionText: 'State any three police-specific benefits of community policing.',
    modelAnswer:
      'Any three of: (1) removing traditional barriers between police and citizens; (2) improved police-community relationships; (3) improved community perception of police legitimacy; (4) increased officer satisfaction with their work.',
    markingPoints: [
      'Dismantles traditional barriers and mistrust',
      'Fosters improved police-community relationships',
      'Enhances public perception of police legitimacy and moral authority',
      'Increases officer morale and job satisfaction',
      '(1 mark each, max 3 marks)',
    ],
  },
  {
    id: 'q15-3',
    topicId: 'benefits',
    topicName: 'Benefits',
    questionNumber: 98,
    questionType: 'state',
    marks: 6,
    questionText: 'State any six shared benefits of community policing enjoyed by both the police and community.',
    modelAnswer:
      'Any six of: (1) better flow of information; (2) reduction of crime levels; (3) promotes interaction between security agencies and community; (4) public support in resources/information; (5) enhanced pro-activeness in dealing with crime; (6) reduced workload for security personnel; (7) ownership of local security by committees; (8) a forum for understanding roles, decreasing conflict; (9) improved collection of crime intelligence; (10) better implementation of crime prevention/control; (11) contributes to social order and socio-economic/political development.',
    markingPoints: [
      '1 mark each for any 6 shared benefits from the manual (max 6 marks)',
    ],
  },

  // -------------------------------------------------------------
  // MOCK EXAMINATION PAPER 1
  // -------------------------------------------------------------
  {
    id: 'p1-1',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 1,
    questionType: 'define',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'Define the following terms as used in community policing:\n1. Community (2 mks)\n2. Partnership (2 mks)',
    modelAnswer:
      '1. Community (2 mks): A social unit whose members share something in common — such as norms, religion, values or identity — and who share a sense of place situated within a given geographical area.\n2. Partnership (2 mks): A cooperative relationship between two or more entities working together to achieve a common goal.',
    markingPoints: [
      'Community (2 mks): Social unit sharing norms/values in a geographical area',
      'Partnership (2 mks): Cooperative relationship between two or more entities for a common goal',
    ],
  },
  {
    id: 'p1-2',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 2,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'State four objects of community policing as provided under Section 96 of the National Police Service Act, 2011.',
    modelAnswer:
      'Any four of: (1) establishing and maintaining active and equal partnership between community and Service; (2) promoting communication between Service and community; (3) promoting cooperation in fulfilling policing needs; (4) improving rendering of police services; (5) improving transparency and accountability of the Service; (6) promoting policing problem identification and problem-solving.',
    markingPoints: [
      'Any 4 of the six objects under Sec. 96: partnership; communication; cooperation; improved service rendering; transparency/accountability; problem identification & solving (1 mk each)',
    ],
  },
  {
    id: 'p1-3',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 3,
    questionType: 'short',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'Outline the four "Cs" through which partnership in community policing is realized.',
    modelAnswer:
      'The four "Cs" are: Cooperation, Collaboration, Communication, and Commitment.',
    markingPoints: [
      'Cooperation (1 mk)',
      'Collaboration (1 mk)',
      'Communication (1 mk)',
      'Commitment (1 mk)',
    ],
  },
  {
    id: 'p1-4',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 4,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'State any four principles of community policing.',
    modelAnswer:
      'Any four of: Voluntary participation; Building partnership (inclusivity); Trust orientation; Confidentiality; Commitment; Community orientation; Pro-active problem solving; Guided by existing laws; Geographical area based; Accountability and transparency; Democracy.',
    markingPoints: [
      'Any 4 of the 11 principles (1 mk each)',
    ],
  },
  {
    id: 'p1-5',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 5,
    questionType: 'explain',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'Explain the S.A.R.A. model of problem solving used in Problem-Oriented Policing.',
    modelAnswer:
      'Scanning — identifying and prioritizing recurring crime/disorder problems. Analysis — researching causes, victims, offenders, and environment. Response — developing and implementing custom interventions with the community. Assessment — evaluating impact and determining necessary follow-up.',
    markingPoints: [
      'Scanning: identifying and prioritizing problem (1 mk)',
      'Analysis: examining causes and stakeholders (1 mk)',
      'Response: implementing solutions (1 mk)',
      'Assessment: evaluating effectiveness (1 mk)',
    ],
  },
  {
    id: 'p1-6',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 6,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'State any four functions of a County Policing Authority.',
    modelAnswer:
      'Any four of: (1) develop proposals on police priorities in the county; (2) monitor crime trends including impact on women and children; (3) monitor progress of targets; (4) oversight of county policing funds budget; (5) provide feedback on police performance; (6) provide platform for public participation; (7) ensure accountability; (8) receive reports from CPFs/CPCs.',
    markingPoints: [
      'Any 4 of the Sec. 41(9) functions (1 mk each)',
    ],
  },
  {
    id: 'p1-7',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 7,
    questionType: 'distinguish',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'Distinguish between a Community Policing Forum and a Community Policing Committee.',
    modelAnswer:
      'A Community Policing Forum (CPF) is the broader assembly of police and local community representatives who meet to identify and solve area security concerns (2 mks). A Community Policing Committee (CPC) is the smaller representative body elected by the forum to coordinate, lead and represent it (2 mks).',
    markingPoints: [
      'CPF = broader forum of police/community reps (2 mks)',
      'CPC = smaller elected body coordinating and leading the forum (2 mks)',
    ],
  },
  {
    id: 'p1-8',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 8,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'State any four roles of the media in community policing.',
    modelAnswer:
      'Any four of: (1) educating the public on community policing; (2) raising awareness on crime trends; (3) marketing the Kenyan model of community policing; (4) keeping communities informed; (5) checks and balances / oversight on implementation; (6) conducting research.',
    markingPoints: [
      'Any 4 media roles (1 mk each)',
    ],
  },
  {
    id: 'p1-9',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 9,
    questionType: 'list',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'List, in correct order, the seven steps followed in implementing community policing.',
    modelAnswer:
      '1. Creating Contact\n2. Initial Public Meeting\n3. Consultation\n4. Adoption\n5. Launching\n6. Mobilization\n7. Monitoring and Evaluation',
    markingPoints: [
      'Creating Contact → Initial Public Meeting → Consultation → Adoption → Launching → Mobilization → Monitoring & Evaluation (correct order 4 mks; partial order 2 mks)',
    ],
  },
  {
    id: 'p1-10',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section I',
    questionNumber: 10,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 1 · Section I (Compulsory)',
    questionText: 'State any four challenges facing the implementation of community policing in Kenya.',
    modelAnswer:
      'Any four of: (1) lack of clear guidelines on police/community roles; (2) misconception into vigilante groups; (3) expectation of financial payment/employment; (4) poor linkage among stakeholders; (5) stigma of being labelled police informers; (6) low public trust in police; (7) inadequate training.',
    markingPoints: [
      'Any 4 challenges from manual (1 mk each)',
    ],
  },
  {
    id: 'p1-11',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section II',
    questionNumber: 11,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 1 · Section II (Essay / Long Answer)',
    questionText: 'Community Policing in Kenya has evolved considerably since the colonial era.\n1. Explain the historical development of community policing in Kenya from the colonial period to its formal launch in 2005. (10 mks)\n2. Discuss the legal and constitutional framework supporting community policing in Kenya. (10 mks)',
    modelAnswer:
      'Part 1 (10 mks): Trace chronological progression: (a) Colonial era: reactive, militaristic, and protective of Imperial British state interests at citizens\' expense; (b) Late 1990s: democratic opening and multi-party politics sparking demand for reform; (c) 1999: Vera Institute of Justice (New York) partnership with KHRC and CBDA piloting community policing; (d) 2005: Official national rollout launched at Ruai Police Station by President Mwai Kibaki.\n\nPart 2 (10 mks): (a) Article 244(e) Constitution of Kenya 2010 mandates NPS to foster and promote relationships with the broader society; (b) Section 96 NPSA 2011 outlines statutory objects of liaison; (c) Section 98 provides for establishment of area CP committees; (d) Section 99 gives committees wide latitude of functions; (e) Section 100 regulates election of civilian chair and police vice-chair, voluntary service (no pay), and majority quorum.',
    markingPoints: [
      'Part 1 (10 mks): Colonial reactive policing → 1990s reform clamour → Vera Institute 1999 → KHRC/CBDA → 2005 Ruai launch by Kibaki (well sequenced)',
      'Part 2 (10 mks): Article 244(e) + NPSA Sections 96–100 explained with specific provisions (objects, formation, leadership, voluntary nature)',
    ],
  },
  {
    id: 'p1-12',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section II',
    questionNumber: 12,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 1 · Section II (Essay / Long Answer)',
    questionText: '1. Discuss the components of community policing under the headings: Community Partnership, Problem Solving and Change Management. (12 mks)\n2. Distinguish between traditional policing and community policing using any four points of comparison. (8 mks)',
    modelAnswer:
      'Part 1 (12 mks):\n• Community Partnership (4 mks): Built on 4 Cs (Cooperation, Collaboration, Communication, Commitment); involves cross-sector and non-profit partnerships to build mutual trust.\n• Problem Solving (4 mks): S.A.R.A. process (Scanning, Analysis, Response, Assessment) targeting root causes of recurring harmful incidents rather than isolated symptoms.\n• Change Management (4 mks): Institutional transformation from reactive paramilitary culture to consultative service; requires clear vision, concrete steps, and organizational commitment.\n\nPart 2 (8 mks): Any 4 comparison points (2 mks each):\n• Information sharing: Traditional is closed/secretive; Community relies on open mutual exchange.\n• Primary tool: Traditional relies almost exclusively on arrest; Community uses wide spectrum (mediation, youth engagement, environmental redesign).\n• Role of community: Traditional views public as passive observers/victims; Community views public as active partners and co-producers of safety.\n• Approach: Traditional is reactive after crime occurs; Community is proactive anticipating and preventing disorder.',
    markingPoints: [
      'Part 1 (12 mks): Partnership/4Cs (4 mks), Problem Solving/SARA (4 mks), Change Management (4 mks) all developed',
      'Part 2 (8 mks): 4 valid comparison points, 2 mks each (info sharing, tools, public role, reactive vs proactive)',
    ],
  },
  {
    id: 'p1-13',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section II',
    questionNumber: 13,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 1 · Section II (Essay / Long Answer)',
    questionText: 'Discuss the role of any FOUR stakeholders in community policing, giving at least three roles for each stakeholder. (20 mks)',
    modelAnswer:
      'Candidate selects any 4 stakeholders (5 marks each = 20 marks):\n1. The Police: maintaining law and order; establishing CPFs/CPCs; giving feedback and sharing crime trends; adopting problem-solving mindset.\n2. The Community: creating an enabling environment for officers; promoting neighbourly contact; identifying local security priorities; maintaining gender and youth sensitivity.\n3. Citizens: active decision-making in Nyumba Kumi; vigilance; balancing privacy with cluster security; obeying laws and promoting peace.\n4. The Media: educating and raising awareness; marketing the Kenyan CP model; oversight and checks/balances; objective crime reporting.\n(Other valid options: GPAs, Youths, Women, Private Security).',
    markingPoints: [
      'Any 4 stakeholders × 5 mks each',
      'For each: stakeholder identification (2 mks) + at least 3 detailed, correct roles (3 mks)',
    ],
  },
  {
    id: 'p1-14',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section II',
    questionNumber: 14,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 1 · Section II (Essay / Long Answer)',
    questionText: '1. Explain the Nyumba Kumi Initiative / Usalama Wa Msingi as a community policing structure. (10 mks)\n2. Discuss any five functions of the Nyumba Kumi Committee. (10 mks)',
    modelAnswer:
      'Part 1 (10 mks): Usalama Wa Msingi is the strategic anchoring of community policing at the household and cluster level (courts, manyattas, estates, villages). It unites citizens based on shared physical location, felt needs, and common ideals. The name "Usalama wa Msingi" was chosen over a rigid "10 households" rule to allow natural flexibility matching local context, forming the fundamental building block ("msingi") of national security.\n\nPart 2 (10 mks): Any 5 functions (2 mks each):\n(1) Sharing relevant security information among cluster members;\n(2) Identifying emerging problems and disputes that could lead to disorder;\n(3) Prioritizing local security and social development needs;\n(4) Pro-active joint problem solving and crime prevention actions;\n(5) Regular reporting to vertical and horizontal committees (action vs information).',
    markingPoints: [
      'Part 1 (10 mks): Definition, purpose, cluster flexibility, basic security rationale',
      'Part 2 (10 mks): Any 5 functions clearly explained, 2 mks each',
    ],
  },
  {
    id: 'p1-15',
    topicId: 'mock-paper-1',
    topicName: 'Sample Paper 1 — Section II',
    questionNumber: 15,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 1 · Section II (Essay / Long Answer)',
    questionText: '1. Describe the composition of the County Policing Authority under Section 41 of the NPSA, 2011. (10 mks)\n2. Discuss the procedure for removal of a member of the County Policing Authority from office. (10 mks)',
    modelAnswer:
      'Part 1 (10 mks): Composition under Section 41:\n• Chairperson: The Governor (or Deputy Governor if authorized);\n• Two members of the County Assembly appointed by the Assembly;\n• County Police Commander;\n• Administration Police County Commander;\n• County CID Commander;\n• Representative of the National Intelligence Service;\n• At least six persons appointed by the Governor representing: business sector, CBOs, women, persons with special needs, religious organizations, and youth.\n\nPart 2 (10 mks): Removal Procedure:\n(a) A petition setting out specific alleged facts is submitted to the Governor;\n(b) Grounds must disclose: incapacity, constitutional violation, bankruptcy, incompetence, felony conviction (>6 months), or gross misconduct;\n(c) Governor investigates and reviews evidence;\n(d) If substantiated, the Governor removes the member; if frivolous, the petition is dismissed;\n(e) An aggrieved member may seek review by the Cabinet Secretary, who may affirm or vary the Governor\'s decision.',
    markingPoints: [
      'Part 1 (10 mks): Complete leadership and membership list per Sec 41(1) (Governor, commanders, 6 community sector reps)',
      'Part 2 (10 mks): Petition → valid grounds test → Governor investigation → decision → review by Cabinet Secretary',
    ],
  },

  // -------------------------------------------------------------
  // MOCK EXAMINATION PAPER 2
  // -------------------------------------------------------------
  {
    id: 'p2-1',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 1,
    questionType: 'define',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'Define "Policing" and "Area" as used in community policing.\n4 mks (2 mks each)',
    modelAnswer:
      '• Policing (2 mks): A proactive process put in place to maintain law and order and social cohesion, remove the fear of crime, and promote respect for the rule of law.\n• Area (2 mks): A geographical area, village, residential estate, location, ward, or community of interest identified by the community policing authority for the purpose of community policing.',
    markingPoints: [
      'Policing — proactive process to maintain law/order and reduce fear of crime (2 mks)',
      'Area — geographical area/village/estate/ward/community of interest (2 mks)',
    ],
  },
  {
    id: 'p2-2',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 2,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'State four functions of the National Police Service under Article 244 of the Constitution of Kenya, 2010.',
    modelAnswer:
      'Any four of: (a) Strive for highest standards of professionalism and discipline; (b) Prevent corruption and promote transparency and accountability; (c) Comply with constitutional human rights standards; (d) Train staff to high standards of competence, integrity, and respect for dignity; (e) Foster and promote relationships with the broader society.',
    markingPoints: [
      'Any 4 of the five Art. 244 functions (1 mk each)',
    ],
  },
  {
    id: 'p2-3',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 3,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'Outline any four community policing activities.',
    modelAnswer:
      'Any four of: neighbourhood watch, joint recreational programs, environmental cleaning, campaigns on emerging crime trends, open police days, security surveys, eradication of illicit brews/drugs, rehabilitation of ex-convicts.',
    markingPoints: [
      'Any 4 activities from the list of 17 (1 mk each)',
    ],
  },
  {
    id: 'p2-4',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 4,
    questionType: 'law',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'State the procedure for electing a chairperson and vice-chairperson of a community policing committee under Section 100 NPSA, 2011.',
    modelAnswer:
      'The members of the committee elect a chairperson and vice-chairperson from among their number. Crucially, the chairperson must be a civilian member (2 mks), while the vice-chairperson must be a police officer (2 mks).',
    markingPoints: [
      'Elected from among committee members',
      'Chairperson must be civilian (2 mks)',
      'Vice-chairperson must be police officer (2 mks)',
    ],
  },
  {
    id: 'p2-5',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 5,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'State any four benefits of community policing shared by both police and the community.',
    modelAnswer:
      'Any four of: better flow of information; reduction of crime levels; enhanced pro-activeness in dealing with crime; reduced workload for security personnel; ownership of local security by committees; reduced conflict and improved mutual understanding.',
    markingPoints: [
      'Any 4 shared benefits (1 mk each)',
    ],
  },
  {
    id: 'p2-6',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 6,
    questionType: 'distinguish',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'Distinguish between "Cooperation" and "Collaboration" as used in community partnership.',
    modelAnswer:
      '• Cooperation (2 mks): Mutual support, teamwork, and willingness of parties to assist one another and build trust.\n• Collaboration (2 mks): A coordinated cooperative effort where group members actively work together as joint partners to achieve a common goal.',
    markingPoints: [
      'Cooperation = mutual support/teamwork/trust-building (2 mks)',
      'Collaboration = cooperative effort by a group toward a common goal (2 mks)',
    ],
  },
  {
    id: 'p2-7',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 7,
    questionType: 'law',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'State any four qualifications required for a person to be appointed a member of the County Policing Authority.',
    modelAnswer:
      'Any four of: (1) must be a citizen of Kenya; (2) meets Chapter Six (Leadership and Integrity) requirements; (3) resident, employed, or conducting business in the county for not less than 3 continuous years; (4) not adjudged bankrupt; (5) not removed from public office for constitutional violation; (6) met all statutory obligations.',
    markingPoints: [
      'Citizen of Kenya; Chapter Six compliance; resident/employed in county 3+ years; not bankrupt; not removed for constitutional breach; met statutory obligations (1 mk each)',
    ],
  },
  {
    id: 'p2-8',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 · Section I',
    questionNumber: 8,
    questionType: 'state',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'State any four roles of citizens in community policing.',
    modelAnswer:
      'Any four of: (1) be at the centre of decision-making within the cluster; (2) maintain security vigilance; (3) balance privacy rights with Nyumba Kumi cooperation; (4) partner with GPAs in crime prevention; (5) obey the law; (6) safeguard peace and national unity.',
    markingPoints: [
      'Any 4 citizen roles (1 mk each)',
    ],
  },
  {
    id: 'p2-9',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 9,
    questionType: 'law',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'State the quorum requirements for:\n1. A community policing committee meeting (2 mks)\n2. A County Policing Authority meeting (2 mks)',
    modelAnswer:
      '1. Community Policing Committee meeting: The majority of the members of the committee (Section 100(6) NPSA). (2 mks)\n2. County Policing Authority meeting: Fifty per cent (50%) of the total members (Section 41 NPSA). (2 mks)',
    markingPoints: [
      '1. Committee quorum = majority of members (2 mks)',
      '2. CPA quorum = 50% of total members (2 mks)',
    ],
  },
  {
    id: 'p2-10',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section I',
    questionNumber: 10,
    questionType: 'law',
    marks: 4,
    paperContext: 'Paper 2 · Section I (Compulsory)',
    questionText: 'State any four grounds for removal of a member of the County Policing Authority from office.',
    modelAnswer:
      'Any four of: (1) inability to perform duties due to mental or physical incapacity; (2) violation of the Constitution; (3) bankruptcy; (4) incompetence; (5) conviction of a felony with imprisonment exceeding six months; (6) gross misconduct or misbehaviour.',
    markingPoints: [
      'Any 4 removal grounds (1 mk each)',
    ],
  },
  {
    id: 'p2-11',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section II',
    questionNumber: 11,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 2 · Section II (Essay / Long Answer)',
    questionText: '1. Trace the history of community policing in Kenya, highlighting key milestones. (10 mks)\n2. Explain the objects of community policing under Section 96 of the NPSA, 2011. (10 mks)',
    modelAnswer:
      'Part 1 (10 mks): Key milestones:\n(a) Colonial legacy: Reactive, state-centric force protecting colonial interests.\n(b) 1990s: Democratic agitation and return of multiparty democracy demanding police accountability.\n(c) 1999: Vera Institute of Justice introduces CP framework via KHRC and CBDA.\n(d) 2005: Official national launch at Ruai Police Station by President Mwai Kibaki.\n(e) 2010: Constitutional recognition under Article 244(e).\n(f) 2011: Enactment of National Police Service Act, 2011 providing statutory enforcement.\n\nPart 2 (10 mks): Section 96 objects explained:\n(a) Establish and maintain active and equal partnership;\n(b) Promote communication between police and public;\n(c) Promote cooperation in fulfilling policing needs;\n(d) Improve quality and rendering of policing services across national, county, and local levels;\n(e) Improve transparency and public accountability;\n(f) Facilitate joint problem identification and proactive problem-solving.',
    markingPoints: [
      'Part 1 (10 mks): Colonial policing → 1990s reform demand → Vera Institute 1999 → 2005 launch → 2010/2011 legal entrenchment (sequenced)',
      'Part 2 (10 mks): At least 4-5 statutory objects under Section 96 explained in detail',
    ],
  },
  {
    id: 'p2-12',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section II',
    questionNumber: 12,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 2 · Section II (Essay / Long Answer)',
    questionText: 'Discuss the eleven principles of community policing, explaining any eight of them. (20 mks)',
    modelAnswer:
      'The eleven principles are: (1) Voluntary participation; (2) Building partnership (inclusivity); (3) Trust orientation; (4) Confidentiality; (5) Commitment; (6) Community orientation; (7) Pro-active problem solving; (8) Guided by existing laws; (9) Geographical area based; (10) Accountability and transparency; (11) Democracy.\n\nExplanation of 8 principles (2.5 mks each):\n• Voluntary participation: Services rendered freely with no claim to financial compensation.\n• Trust orientation: Foundation of information exchange; without trust, public cooperation ceases.\n• Confidentiality: Strict safeguarding of informant identities and sensitive security data.\n• Democracy: Office bearers elected by community members, not unilaterally chosen by police.\n• Guided by existing laws: Must operate strictly within constitutional and statutory bounds.\n• Geographical area based: Rooted in tangible local neighbourhood clusters.\n• Accountability and transparency: Officers held liable; open and genuine communication.\n• Pro-active problem solving: Addressing root causes and precursors of crime rather than waiting for incidents.',
    markingPoints: [
      'List of principles + explanation of 8 principles × 2.5 mks each (name + thorough explanation)',
    ],
  },
  {
    id: 'p2-13',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section II',
    questionNumber: 13,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 2 · Section II (Essay / Long Answer)',
    questionText: '1. Explain the S.A.R.A. model of problem-solving. (10 mks)\n2. Discuss the concept of change management in the transition from traditional to community policing. (10 mks)',
    modelAnswer:
      'Part 1 (10 mks): The S.A.R.A. Model:\n• Scanning (2.5 mks): Identifying recurring clusters of incidents causing harm and prioritizing issues based on public concern.\n• Analysis (2.5 mks): Deep diagnostic phase studying victims, offenders, physical location, and underlying societal triggers.\n• Response (2.5 mks): Developing creative, broad-based interventions executed jointly with community partners.\n• Assessment (2.5 mks): Evaluating post-intervention data to determine if incidents reduced, harm diminished, or if re-analysis is required.\n\nPart 2 (10 mks): Change Management:\nTransition requires shifting from a reactive, arrest-driven, closed culture to an open, collaborative partnership. Key aspects include:\n(a) Recognizing the urgent need for organizational reform;\n(b) Formulating and communicating a clear institutional vision;\n(c) Developing concrete steps and curriculum updates;\n(d) Overcoming officer resistance and community cynicism;\n(e) Sustaining leadership commitment and rewarding community-oriented initiative.',
    markingPoints: [
      'Part 1 (10 mks): All 4 SARA stages explained with definitions and operational examples (2.5 mks each)',
      'Part 2 (10 mks): Need for change, institutional mindset shift, vision, concrete operational steps, and sustained commitment',
    ],
  },
  {
    id: 'p2-14',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section II',
    questionNumber: 14,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 2 · Section II (Essay / Long Answer)',
    questionText: '1. Describe the community-level structures of community policing: the CPF, the CPC and the Nyumba Kumi Initiative. (12 mks)\n2. State the challenges facing the implementation of these structures. (8 mks)',
    modelAnswer:
      'Part 1 (12 mks):\n• Community Policing Forum (CPF) (4 mks): Wide assembly of police officers, community leaders, and local residents meeting to discuss security concerns and exchange intelligence.\n• Community Policing Committee (CPC) (4 mks): Executive body elected by the CPF under Section 98(4) NPSA. Chaired by a civilian with a police officer vice-chair, responsible for coordinating, executing, and evaluating the policing program.\n• Nyumba Kumi / Usalama wa Msingi (4 mks): Household/cluster-level structure uniting neighbours in estates, villages, or manyattas based on physical location and mutual vigilance.\n\nPart 2 (8 mks): Challenges (4 challenges × 2 mks each):\n(a) Fear and distrust between police and residents;\n(b) Stigma of being labelled police informers;\n(c) Infiltration or distortion into partisan vigilante gangs;\n(d) Misunderstanding of voluntary status with members demanding salaries.',
    markingPoints: [
      'Part 1 (12 mks): CPF (4 mks), CPC (4 mks), and Nyumba Kumi (4 mks) each described with composition and mandate',
      'Part 2 (8 mks): Any 4 implementation challenges, 2 mks each',
    ],
  },
  {
    id: 'p2-15',
    topicId: 'mock-paper-2',
    topicName: 'Sample Paper 2 — Section II',
    questionNumber: 15,
    questionType: 'essay',
    marks: 20,
    paperContext: 'Paper 2 · Section II (Essay / Long Answer)',
    questionText: '1. Outline the functions of the County Policing Authority under Section 41(9) of the NPSA, 2011. (10 mks)\n2. Describe the sequence followed in implementing community policing, from creating contact to monitoring and evaluation. (10 mks)',
    modelAnswer:
      'Part 1 (10 mks): Section 41(9) functions (any 5 well developed, 2 mks each):\n• Developing proposals on policing priorities in the county;\n• Monitoring trends and patterns of crime (especially vulnerable groups like women and children);\n• Monitoring police progress against agreed targets;\n• Providing financial oversight of county policing authority funds;\n• Providing a public participation and feedback platform on police service rendering.\n\nPart 2 (10 mks): The 7-step implementation sequence:\n1. Creating Contact: Initial outreach by police leadership to community leaders.\n2. Initial Public Meeting: First open assembly to introduce the community policing concept.\n3. Consultation: Forming joint consultative forums for active listening and needs identification.\n4. Adoption: Formulating and approving a formal Action Plan aligned with police mandate.\n5. Launching: Official public unveiling of the partnership.\n6. Mobilization: Ground execution of action plan (patrols, problem-solving, intelligence flow).\n7. Monitoring and Evaluation: Continuous assessment of crime statistics and feedback sessions.',
    markingPoints: [
      'Part 1 (10 mks): Any 5 functions under Section 41(9), 2 mks each',
      'Part 2 (10 mks): All 7 steps named in proper sequence and briefly explained',
    ],
  },
];
