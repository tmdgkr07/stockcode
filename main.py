
import kospi
import kosdaq
import oversea
import test
import koreaconvert

kospi.download_kospi()
kosdaq.download_kosdaq()
oversea.download_oversea()
test.makejsonfile()
koreaconvert.makejsonfile()