import Foundation
import Capacitor
import TrueTime

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorCheckAutoTimePlugin)
public class CapacitorCheckAutoTimePlugin: CAPPlugin {
    private let implementation = CapacitorCheckAutoTime()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

 @objc func getTimeSettingsInfo(_ call: CAPPluginCall) {
        guard Thread.isMainThread else {
            DispatchQueue.main.async {
                self.getTimeSettingsInfo(call)
            }
            return
        }

        TrueTimeClient.sharedInstance.start(pool: ["time.apple.com"],
                                            port: 123,
                                            maxRetries: 5,
                                            maxOffset: 2.0,
                                            minSamples: 5,
                                            maxSamples: 10,
                                            pollInterval: 3600,
                                            pollRetryDelay: 15,
                                            timeout: 10
        )

        if let referenceTime = TrueTimeClient.sharedInstance.referenceTime,
           referenceTime.isInitiallyTimeSynced,
           referenceTime.isFromServer {
            let isAutomaticallySet = true
            let isFormat24Hours = self.isTimeFormat24Hours()

            let result: [String: Any] = [
                "isAutomaticallySet": isAutomaticallySet,
                "isFormat24Hours": isFormat24Hours
            ]

            call.resolve(result)
        } else {
            call.reject("TrueTime is not initialized")
        }
    }

    private func isTimeFormat24Hours() -> Bool {
        let timeFormat = DateFormatter.dateFormat(fromTemplate: "j", options: 0, locale: Locale.current)!
        return timeFormat.contains("H") || timeFormat.contains("k")
    }

}
