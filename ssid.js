if ($network.wifi && ['asus-5g'].includes($network.wifi.ssid)) {
    $surge.setOutboundMode('direct')
  } else 
  if ($network.wifi && ['AX3000'].includes($network.wifi.ssid)) {
    $surge.setOutboundMode('rule')
  }else {
    $surge.setOutboundMode('global-proxy')
  }
  $done()