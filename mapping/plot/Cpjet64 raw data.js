var DATA = [
    {"name":"Origin 1",  "SSC":"125281.313 9056.063 95137.438 94998.313",   "EZB":"125588.188 8845.625 95360.25 95251.063",     "Market":"125774.688 8706.313 95502.563 95557.188"},
    {"name":"Origin 2",  "SSC":"120846.5 20987.5 83723.313 97637.875",      "EZB":"121150.75 20818 83956.5 97866.625",          "Market":"121340.375 20736.813 84112.75 98160.063"},
    {"name":"Origin 3",  "SSC":"117618.5 31156.25 75431 103021.313",        "EZB":"117921.688 31006.188 75675 103227.438",      "Market":"118123.375 30978.375 75859.063 103513.5"},
    {"name":"Origin 4",  "SSC":"110542.188 45893.063 61443.375 106060.563", "EZB":"110836.125 45722.5 61691.5 106231.063",      "Market":"111039.5 45675.938 61896.938 106497.313"},
    {"name":"Origin 5",  "SSC":"103094.188 57140.25 49841.125 106337.563",  "EZB":"103377.25 56944.688 50080.313 106476.375",   "Market":"103574.688 56868.75 50293.125 106720.375"},
    {"name":"Origin 6",  "SSC":"96629.438 68730.25 38638.938 108011.688",   "EZB":"96896.813 68519.25 38861.125 108117.375",    "Market":"97086.563 68427.5 39080.188 108340.688"},
    {"name":"Origin 7",  "SSC":"90652.438 78768.438 32765.563 111566.75",   "EZB":"90906.625 78548.75 32942.5 111644.063",      "Market":"91100.188 78458.75 33176.938 111853.25"},
    {"name":"Origin 8",  "SSC":"82594.563 86072.375 31266.25 111135.625",   "EZB":"82837.625 85836.625 31356.813 111186.563",   "Market":"83030.563 85735.625 31552.188 111382.125"},
    {"name":"Origin 9",  "SSC":"75005.688 93874.688 32887.25 111602.563",   "EZB":"75233.688 93626.688 32882.875 111626.563",   "Market":"75424.813 93517 33020.75 111807.063"},
    {"name":"Origin 10", "SSC":"64445.563 99698.688 38845.125 108085.625",  "EZB":"64661.813 99433.438 38759.875 108081.125",   "Market":"64846.938 99305.875 38814.813 108245.25"},
    {"name":"Origin 11", "SSC":"53407.625 105304.188 50080.938 106450.25",  "EZB":"53619.375 105028.25 49962.25 106420.938",    "Market":"53821.625 104896.625 49982.375 106577.125"},
    {"name":"Origin 12", "SSC":"43029.375 111973.75 61702.875 106211.125",  "EZB":"43231.313 111690.625 61564 106157.063",      "Market":"43455.875 111556.938 61562 106303"},
    {"name":"Origin 13", "SSC":"29564.375 118366.625 75695.25 103215",      "EZB":"29763.313 118075 75544.875 103132.125",      "Market":"30024.125 117932.063 75517.625 103263.563"},
    {"name":"Origin 14", "SSC":"18649.688 121591.125 83985.25 97862.563",   "EZB":"18864.875 121292.125 83827.625 97756.125",   "Market":"19188.5 121139.313 83747.063 97909.125"},
    {"name":"Origin 15", "SSC":"11972.563 125419.063 95389 95250.313",      "EZB":"12197.625 125118.5 95236.313 95127.063",     "Market":"12540.063 124955.125 95177.313 95232.188" },
    {"name":"Origin 16", "SSC":"11836.5 125406.125 101468.313 88709.5",     "EZB":"12033.313 125102.563 101321.188 88573",      "Market":"12248.5 124926.188 101249.625 88667.563"  },
    {"name":"Origin 17", "SSC":"18387.25 121551.188 103168.813 77248.75",   "EZB":"18545.75 121242.875 103029.75 77099.438",    "Market":"18572.938 121043.313 102938.938 77180.75" },
    {"name":"Origin 18", "SSC":"29289.125 118298.125 108229.25 68096.438",  "EZB":"29427 117990.875 108107.063 67943.563",      "Market":"29416.188 117778.75 108012.875 68023.688" },
    {"name":"Origin 19", "SSC":"42765 111872.438 110383.688 53461.375",     "EZB":"42907.813 111566 110282.688 53305.313",      "Market":"42869.875 111329.938 110178.438 53382.938"},
    {"name":"Origin 20", "SSC":"53164.438 105181.063 109918.938 41300.5",   "EZB":"53321.625 104876.563 109838.063 41153.125",  "Market":"53281.75 104620.688 109728.875 41241.563" },
    {"name":"Origin 21", "SSC":"64218.875 99552.313 110814.188 29212.063",  "EZB":"64384.125 99253.313 110754.313 29080.938",   "Market":"64343.375 98977.875 110641.5 29188.875"   },
    {"name":"Origin 22", "SSC":"74789.375 93701.938 114233 20560.375",      "EZB":"74968.625 93414.063 114199.313 20510.375",   "Market":"74944.188 93129.813 114096.875 20701.25"  },
    {"name":"Origin 23", "SSC":"82398.188 85884 113776.875 17853.125",      "EZB":"82597 85604.625 113769.313 17962.125",       "Market":"82594.188 85313.125 113680.563 18267.75"  },
    {"name":"Origin 24", "SSC":"90473.563 78562.5 114198 20365.188",        "EZB":"90687.5 78295.063 114216.563 20605.938",     "Market":"90702.625 77996.75 114142.188 20949.438"  },
    {"name":"Origin 25", "SSC":"96478.438 68517.813 110742.063 28937.25",   "EZB":"96711.813 68257.375 110789.75 29215.75",     "Market":"96751 67950.563 110734.875 29540.813"     },
    {"name":"Origin 26", "SSC":"102968.375 56913 109809.875 41009.375",     "EZB":"103223.125 56664.5 109891.688 41296.313",    "Market":"103295.5 56360.375 109870.063 41615.75"   },
    {"name":"Origin 27", "SSC":"110439.563 45645.25 110238.875 53161.688",  "EZB":"110710.5 45416.688 110354 53452.75",         "Market":"110811.438 45118.688 110365.938 53768.75" },
    {"name":"Origin 28", "SSC":"117549.625 30895.188 108044.563 67802.563", "EZB":"117837.25 30683.563 108198 68088.188",       "Market":"117970.313 30389.5 108251.813 68402.5"    },
    {"name":"Origin 29", "SSC":"120806.25 20754.625 102955.688 76963.813",  "EZB":"121101.563 20529.125 103134.688 77239.688",  "Market":"121251 20207.25 103214.688 77548.125"     },
    {"name":"Origin 30", "SSC":"125268.375 8875.375 101231.875 88438.938",  "EZB":"125572.313 8617.688 101437.625 88706.188",   "Market":"125745.938 8280.875 101555.438 89016.625" }
];