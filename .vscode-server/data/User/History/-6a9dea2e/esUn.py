
import kospi
import kosdaq
import oversea
import overseaconvert
import koreaconvert

kospi.download_kospi()
kosdaq.download_kosdaq()
oversea.download_oversea()
overseaconvert.makejsonfile()
koreaconvert.makejsonfile()