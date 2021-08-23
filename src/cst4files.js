export default  { //[ 'bookname', {htmlfn:start_pn}|div::type ]
// 'vin01m.mul.xml':['pj'],
// 'vin01a.att.xml':['pj0a'],
// 'vin01t1.tik.xml':['sd0t'],
// 'vin01t2.tik.xml':['pjpt'], //這樣才對得上 pj0m pj0a

// 'vin02m1.mul.xml':['pc'],
// 'vin02m2.mul.xml':['mv'],
// 'vin02m3.mul.xml':['cv'],
// 'vin02m4.mul.xml':['pvr'],
// 'vin02a1.att.xml':['pc0a'],
// 'vin02a2.att.xml':['mv0a'],
// 'vin02a3.att.xml':['cv0a'],
// 'vin02a4.att.xml':['pvr0a'],

'vin02t.tik.xml':[''],//split into 4 files pc0t,mv0t,cv0t,pvr0t

//not used
// 'vin04t.nrf.xml':[''],'vin05t.nrf.xml':[''],'vin06t.nrf.xml':[''],'vin07t.nrf.xml':[''],'vin08t.nrf.xml':[''],
// 'vin09t.nrf.xml':[''],'vin10t.nrf.xml':[''],'vin11t.nrf.xml':[''],'vin12t.nrf.xml':[''],'vin13t.nrf.xml':[''],
    
// 's0101m.mul.xml':['dn1', {d1:0,d2:150,d3:254,d4:300,d5:323,d6:359,d7:378,d8:381,d9:406,d10:444,d11:481,d12:501,d13:518}],
's0101m.mul.xml':['dn1', 'sutta'],
's0101a.att.xml':['dn1a', 's0101m.mul.xml' ],
's0101t.tik.xml':['dn1t', 's0101m.mul.xml' ],
// 's0102m.mul.xml':['dn2',{d14:1,d15:95,d16:131,d17:241,d18:273,d19:293,d20:331,d21:344,d22:372,d23:406}],
's0102m.mul.xml':['dn2','sutta@14'],
's0102a.att.xml':['dn2a','s0102m.mul.xml'],
's0102t.tik.xml':['dn2t','s0102m.mul.xml'],
// 's0103m.mul.xml':['dn3',{d24:1,d25:49,d26:80,d27:111,d28:141,d29:164,d30:198,d31:242,d32:275,d33:296,d34:350}],
's0103m.mul.xml':['dn3','sutta@24'],
's0103a.att.xml':['dn3a','s0103m.mul.xml'],
's0103t.tik.xml':['dn3t','s0103m.mul.xml'],

// 's0104t.nrf.xml':[''],
// 's0105t.nrf.xml':['dn1u'],

's0201m.mul.xml':['mn1',{m1:1,m2:14,m3:29,m4:34,m5:57,m6:64,m7:70,m8:81,m9:89,m10:105,
    m11:139,m12:146,m13:163,m14:175,m15:181,m16:185,m17:190,m18:199,m19:206,m20:216,
    m21:222,m22:234,m23:249,m24:252,m25:261,m26:272,m27:288,m28:300,m29:307,m30:312,
    m31:325,m32:332,m33:346,m34:350,m35:353,m36:364,m37:390,m38:396,m39:415,m40:435,
    m41:439,m42:444,m43:449,m44:460,m45:468,m46:473,m47:487,m48:491,m49:501,m50:506}],
's0201a.att.xml':['mn1a','s0201m.mul.xml'],
's0201t.tik.xml':['mn1t','s0201m.mul.xml'],
's0202m.mul.xml':['mn2',{m51:1,m52:17,m53:22,m54:31,m55:51,m56:56,m57:78,m58:83,m59:88,m60:92,
    m61:107,m62:113,m63:122,m64:129,m65:134,m66:148,m67:157,m68:166,m69:173,m70:174,
    m71:185,m72:187,m73:193,m74:201,m75:207,m76:223,m77:237,m78:260,m79:269,m80:278,
    m81:282,m82:293,m83:308,m84:317,m85:324,m86:347,m87:353,m88:358,m89:364,m90:375,
    m91:383,m92:396,m93:401,m94:412,m95:422,m96:436,m97:445,m98:454,m99:462,m100:473}],
's0202a.att.xml':['mn2a','s0202m.mul.xml'],
's0202t.tik.xml':['mn2t','s0202m.mul.xml'],
's0203m.mul.xml':['mn3',{m101:0,m102:21,m103:34,m104:41,m105:55,m106:66,m107:74,m108:79,m109:85,m110:91,
    m111:93,m112:98,m113:105,m114:109,m115:124,m116:133,m117:136,m118:144,m119:153,m120:160,
    m121:176,m122:185,m123:197,m124:209,m125:213,m126:223,m127:229,m128:236,m129:246,m130:261,
    m131:272,m132:276,m133:279,m134:286,m135:289,m136:298,m137:304,m138:313,m139:323,m140:342,
    m141:371,m142:376,m143:383,m144:389,m145:395,m146:398,m147:416,m148:420,m149:428,m150:434,
    m151:438,m152:453}],
's0203a.att.xml':['mn3a','s0203m.mul.xml'],
's0203t.tik.xml':['mn3t','s0203m.mul.xml'],


// 's0301m.mul.xml':['sn1'],
// 's0301a.att.xml':['sn1a'],
// 's0301t.tik.xml':['sn1t'],
// 's0302m.mul.xml':['sn2'],
// 's0302a.att.xml':['sn2a'],
// 's0302t.tik.xml':['sn2t'],
// 's0303m.mul.xml':['sn3'],
// 's0303a.att.xml':['sn3a'],
// 's0303t.tik.xml':['sn3t'],
// 's0304m.mul.xml':['sn4'],
// 's0304a.att.xml':['sn4a'],
// 's0304t.tik.xml':['sn4t'],
// 's0305m.mul.xml':['sn5'],
// 's0305a.att.xml':['sn5a'],
// 's0305t.tik.xml':['sn5t'],
// 's0401m.mul.xml':['an'],
// 's0401a.att.xml':['an'],
// 's0401t.tik.xml':['an'],
// 's0402m1.mul.xml':['an'],
// 's0402m2.mul.xml':['an'],
// 's0402m3.mul.xml':['an'],
// 's0402a.att.xml':['an'],
// 's0402t.tik.xml':['an'],
// 's0403m1.mul.xml':['an'],
// 's0403m2.mul.xml':['an'],
// 's0403m3.mul.xml':['an'],
// 's0403a.att.xml':['an'],
// 's0403t.tik.xml':['an'],
// 's0404m1.mul.xml':['an'],
// 's0404m2.mul.xml':['an'],
// 's0404m3.mul.xml':['an'],
// 's0404m4.mul.xml':['an'],
// 's0404a.att.xml':['an'],
// 's0404t.tik.xml':['an'],
// 's0501m.mul.xml':[''],
// 's0501a.att.xml':[''],
// 's0501t.nrf.xml':[''],
// 's0502m.mul.xml':[''],
// 's0502a.att.xml':[''],
// 's0503m.mul.xml':[''],
// 's0503a.att.xml':[''],
// 's0504m.mul.xml':[''],
// 's0504a.att.xml':[''],
// 's0505m.mul.xml':[''],
// 's0505a.att.xml':[''],
// 's0506m.mul.xml':[''],
// 's0506a.att.xml':[''],
// 's0507m.mul.xml':[''],
// 's0507a.att.xml':[''],
// 's0508m.mul.xml':[''],
// 's0508a1.att.xml':[''],
// 's0508a2.att.xml':[''],
// 's0509m.mul.xml':[''],
// 's0509a.att.xml':[''],
// 's0510m1.mul.xml':[''],
// 's0510m2.mul.xml':[''],
// 's0510a.att.xml':[''],
// 's0511m.mul.xml':[''],
// 's0511a.att.xml':[''],
// 's0512m.mul.xml':[''],
// 's0512a.att.xml':[''],
// 's0513m.mul.xml':[''],
// 's0513a1.att.xml':[''],
// 's0513a2.att.xml':[''],
// 's0513a3.att.xml':[''],
// 's0513a4.att.xml':[''],
// 's0514m.mul.xml':[''],
// 's0514a1.att.xml':[''],
// 's0514a2.att.xml':[''],
// 's0514a3.att.xml':[''],
// 's0515m.mul.xml':[''],
// 's0515a.att.xml':[''],
// 's0516m.mul.xml':[''],
// 's0516a.att.xml':[''],
// 's0517a.att.xml':[''],
// 's0517m.mul.xml':[''],
// 's0518m.nrf.xml':[''],
// 's0519m.mul.xml':[''],
// 's0519a.att.xml':[''],
// 's0519t.tik.xml':[''],
// 's0520m.nrf.xml':[''],

// 'abh01m.mul.xml':[''],
// 'abh01a.att.xml':[''],
// 'abh01t.tik.xml':[''],
// 'abh02m.mul.xml':[''],
// 'abh02a.att.xml':[''],
// 'abh02t.tik.xml':[''],
// 'abh03m1.mul.xml':[''],
// 'abh03m2.mul.xml':[''],
// 'abh03m3.mul.xml':[''],
// 'abh03m4.mul.xml':[''],
// 'abh03m5.mul.xml':[''],
// 'abh03m6.mul.xml':[''],
// 'abh03m7.mul.xml':[''],
// 'abh03m8.mul.xml':[''],
// 'abh03m9.mul.xml':[''],
// 'abh03m10.mul.xml':[''],
// 'abh03m11.mul.xml':[''],
// 'abh03a.att.xml':[''],
// 'abh03t.tik.xml':[''],
// 'abh04t.nrf.xml':[''],
// 'abh05t.nrf.xml':[''],
// 'abh06t.nrf.xml':[''],
// 'abh07t.nrf.xml':[''],
// 'abh08t.nrf.xml':[''],
// 'abh09t.nrf.xml':[''],

// 'e0101n.mul.xml':[''],
// 'e0102n.mul.xml':[''],
// 'e0103n.att.xml':[''],
// 'e0104n.att.xml':[''],
// 'e0105n.nrf.xml':[''],
// 'e0201n.nrf.xml':[''],
// 'e0301n.nrf.xml':[''],
// 'e0401n.nrf.xml':[''],
// 'e0501n.nrf.xml':[''],
// 'e0601n.nrf.xml':[''],
// 'e0602n.nrf.xml':[''],
// 'e0603n.nrf.xml':[''],
// 'e0604n.nrf.xml':[''],
// 'e0605n.nrf.xml':[''],
// 'e0606n.nrf.xml':[''],
// 'e0607n.nrf.xml':[''],
// 'e0608n.nrf.xml':[''],
// 'e0701n.nrf.xml':[''],
// 'e0702n.nrf.xml':[''],
// 'e0703n.nrf.xml':[''],
// 'e0801n.nrf.xml':[''],
// 'e0802n.nrf.xml':[''],
// 'e0803n.nrf.xml':[''],
// 'e0804n.nrf.xml':[''],
// 'e0805n.nrf.xml':[''],
// 'e0806n.nrf.xml':[''],
// 'e0807n.nrf.xml':[''],
// 'e0808n.nrf.xml':[''],
// 'e0809n.nrf.xml':[''],
// 'e0810n.nrf.xml':[''],
// 'e0811n.nrf.xml':[''],
// 'e0812n.nrf.xml':[''],
// 'e0813n.nrf.xml':[''],
// 'e0901n.nrf.xml':[''],
// 'e0902n.nrf.xml':[''],
// 'e0903n.nrf.xml':[''],
// 'e0904n.nrf.xml':[''],
// 'e0905n.nrf.xml':[''],
// 'e0906n.nrf.xml':[''],
// 'e0907n.nrf.xml':[''],
// 'e1001n.nrf.xml':[''],
// 'e1002n.nrf.xml':[''],
// 'e1003n.nrf.xml':[''],
// 'e1004n.nrf.xml':[''],
// 'e1005n.nrf.xml':[''],
// 'e1006n.nrf.xml':[''],
// 'e1007n.nrf.xml':[''],
// 'e1008n.nrf.xml':[''],
// 'e1009n.nrf.xml':[''],
// 'e1010n.nrf.xml':[''],
// 'e1101n.nrf.xml':[''],
// 'e1102n.nrf.xml':[''],
// 'e1103n.nrf.xml':[''],
// 'e1201n.nrf.xml':[''],
// 'e1202n.nrf.xml':[''],
// 'e1203n.nrf.xml':[''],
// 'e1204n.nrf.xml':[''],
// 'e1205n.nrf.xml':[''],
// 'e1206n.nrf.xml':[''],
// 'e1207n.nrf.xml':[''],
// 'e1208n.nrf.xml':[''],
// 'e1209n.nrf.xml':[''],
// 'e1210n.nrf.xml':[''],
// 'e1211n.nrf.xml':[''],
// 'e1212n.nrf.xml':[''],
// 'e1213n.nrf.xml':[''],
// 'e1214n.nrf.xml':[''],
// 'e1215n.nrf.xml':[''],
}