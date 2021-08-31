class SimilarWebApp {
  constructor(apikey) {
    this.apikey = apikey;
    this.connect = function connect(token, method_url, params) {
      var url = `https://api.similarweb.com${method_url}`;
      var options = {
        muteHttpExceptions: true,
        method: 'GET',
        contentType: 'application/json'
      };
      if ((!!params) && (params != null)) {
        // Logger.log(params);
        var get_params = '?' + http_build_query(params);
        var fullurl = `${url}${get_params}&api_key=${token}`;
      } else {
        var fullurl = `${url}?format=json&api_key=${token}`;
      }
      // Logger.log(fullurl);
      var response = UrlFetchApp.fetch(fullurl, options);
      var json = JSON.parse(response);
      if (!!json) {
        return json;
      } else {
        Logger.log(response);
        return
      }
      function http_build_query(formdata, numeric_prefix, arg_separator) { // Generate URL-encoded query string
        var key,
          use_val,
          use_key,
          i = 0,
          tmp_arr = [];
        if (!arg_separator) {
          arg_separator = '&';
        }
        for (key in formdata) {
          use_key = escape(key);
          use_val = escape((formdata[key].toString()));
          use_val = use_val.replace(/%20/g, '+');
          if (numeric_prefix && !isNaN(key)) {
            use_key = numeric_prefix + i;
          }
          tmp_arr[i] = use_key + '=' + use_val;
          i++;
        }
        return tmp_arr.join(arg_separator).replace(/\+/gm, '%2B');
      }
    };
  }
  Utilities() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      CheckCapabilities() {
        var method_url = `/capabilities`;
        return new SimilarWebApp().connect(this.apikey, method_url);
      }
      ListCategories() {
        var method_url = `/v1/TopSites/categories`;
        return new SimilarWebApp().connect(this.apikey, method_url);
      }
    };
    return new data(this.apikey);
  }
  TotalTraffic() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      Visits({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/total-traffic-and-engagement/visits`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
        };
        if (country != null) {
          params.country = country;
        }
        if (show_verified != null) {
          params.show_verified = show_verified;
        }
        return new SimilarWebApp(this.apikey).connect(this.apikey, method_url, params);
      }
      PagesVisit({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/total-traffic-and-engagement/pages-per-visit`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      AverageVisitDuration({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/total-traffic-and-engagement/average-visit-duration`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      BounceRate({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/total-traffic-and-engagement/bounce-rate`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopVsMobileSplit({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/total-traffic-and-engagement/visits-split`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DeduplicatedAudience({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/dedup/deduplicated-audiences`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  DesktopTraffic() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      DesktopVisits({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        state,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/traffic-and-engagement/visits`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          state: state,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopPagesVisit({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        state,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/traffic-and-engagement/pages-per-visit`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          state: state,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopAverageVisitDuration({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        state,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/traffic-and-engagement/average-visit-duration`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          state: state,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopBounceRate({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        state,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/traffic-and-engagement/bounce-rate`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          state: state,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      GlobalRank({
        domain,
        start_date,
        end_date,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/global-rank/global-rank`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          main_domain_only: main_domain_only,
          format: format
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      CountryRank({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/country-rank/country-rank`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      GeographyDistribution({
        domain,
        start_date,
        end_date,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/geo/traffic-by-country`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopUniqueVisitors({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        state,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/unique-visitors/desktop_unique_visitors`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          state: state,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  MobileWebTraffic() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      MobileWebVisits({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v2/website/${domain}/mobile-web/visits`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MobileWebPagesVisit({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v2/website/${domain}/mobile-web/pages-per-visit`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MobileWebAverageVisitDuration({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v2/website/${domain}/mobile-web/average-visit-duration`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MobileWebBounceRate({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v2/website/${domain}/mobile-web/bounce-rate`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MobileWebUniqueVisitors({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/unique-visitors/mobileweb_unique_visitors`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  DesktopWebTrafficSources() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      DesktopTrafficSources({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/overview`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopTrafficSourcesOverview({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/overview-share`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopTrafficSourcesEngagementMetricsPagesPerVisit({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/engagement-metrics/pages-per-visit`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopTrafficSourcesEngagementMetricsAverageVisitDuration({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/engagement-metrics/average-duration`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopTrafficSourcesEngagementMetricsBounceRate({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/engagement-metrics/bounce-rate`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopSocialReferrals({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/social`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopReferrals({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/referrals`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopAdNetworks({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/ad-networks`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopDisplayPublishers({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/publishers`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopPublishersPerAdNetwork({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}//traffic-sources/publishers-by-ad-networks`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopOrganicSearchKeywords({
        domain,
        start_date,
        end_date,
        country,
        limit,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/organic-search`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          limit: limit,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopPaidSearchKeywords({
        domain,
        start_date,
        end_date,
        country,
        limit,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/paid-search`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          limit: limit,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      SearchVisitsDistributionDesktop({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/search-visits-distribution`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopBrandedKeywords({
        domain,
        start_date,
        end_date,
        country,
        limit,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/branded-search`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          limit: limit,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopNonBrandedKeywords({
        domain,
        start_date,
        end_date,
        country,
        limit,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/nonbranded-search`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          limit: limit,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopQuestionsKeywords({
        domain,
        start_date,
        end_date,
        country,
        limit,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/questions-search`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          limit: limit,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopOrganicOutgoingLinks({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/outgoing-referrals`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopOutgoingAdsAdNetworks({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/outgoing-ads-adnetworks`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopOutgoingAdsAdvertisers({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/outgoing-ads-advertisers`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  MobileWebTrafficSources() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      MobileWebTrafficSourcesOverview({
        domain,
        start_date,
        end_date,
        country,
        granularity,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/mobile-overview-share`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MobileWebReferrals({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/traffic-sources/mobileweb-referrals`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MobileWebKeywords({
        domain,
        start_date,
        end_date,
        country,
        limit,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/mobile-traffic-sources/mobile-search`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          limit: limit,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      SearchVisitsDistributionMobile({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/mobile-traffic-sources/search-visits-distribution`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  IndustryAnalysis() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      TopSitesDesktop({
        start_date,
        end_date,
        country,
        format,
        page
      }) {
        var method_url = `/v1/website/$Arts_and_Entertainment~Music/topsites/desktop`; // https://api.similarweb.com/v1/TopSites/categories
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          format: format,
        };
        if (page != null) {
          params.page = page;
        }
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      TopSitesMobile({
        start_date,
        end_date,
        country,
        format,
        page
      }) {
        var method_url = `/v1/website/$Arts_and_Entertainment~Music/topsites/mobile`; // https://api.similarweb.com/v1/TopSites/categories
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          format: format,
          page: page
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      TopSitesDesktopMobile({
        category,
        start_date,
        end_date,
        country,
        format,
        page
      }) {
        var method_url = `/v1/website/${category}/topsites/total`; // https://api.similarweb.com/v1/TopSites/categories
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          format: format,
        };
        if (page != null) {
          params.page = page;
        }
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  AudienceAnalysis() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      DesktopDemographicsAge({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/demographics/age`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DesktopDemographicsGender({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/demographics/gender`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MobileWebDemographicsAge({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/demographics-mobile/age`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MobileWebDemographicsGender({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/demographics-mobile/gender`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      AudienceInterests({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/audience-interests/also-visited`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  DesktopKeywordAnalysis() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      KeywordCompetitorsOrganic({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/search-competitors/organicsearchcompetitors`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      KeywordCompetitorsPaid({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/search-competitors/paidsearchcompetitors`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      KeywordAnalysisOrganicCompetitors({
        domain,
        start_date,
        end_date,
        country,
        limit,
        format
      }) {
        var method_url = `/v1/keywords/car/analysis/organic-competitors`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          limit: limit,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      KeywordAnalysisPaidCompetitors({
        domain,
        start_date,
        end_date,
        country,
        limit,
        format
      }) {
        var method_url = `/v1/keywords/car/analysis/paid-competitors`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          limit: limit,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  WebsiteContent() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      SubdomainsDesktop({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/website-content-subdomains/subdomains`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      SubdomainsMobileWeb({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format
      }) {
        var method_url = `/v1/website/${domain}/website-content-subdomains-mobile/subdomains`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  Other() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      APILite({
        domain
      }) {
        var method_url = `/v1/website/${domain}/general-data/all`;
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      SimilarSites({
        domain
      }) {
        var method_url = `/v1/website/${domain}/similar-sites/similarsites`;
        return new SimilarWebApp().connect(this.apikey, method_url);
      }
      CategoryRank({
        domain
      }) {
        var method_url = `/v1/website/${domain}/category-rank/category-rank`;
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  MobileApps() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      AppDetails({
        appId,
        store
      }) {
        var method_url = `/v1/app/${store}/${appId}/Details/details`;
        return new SimilarWebApp().connect(this.apikey, method_url);
      }
      SiteRelatedApps({
        domain,
        store,
        format
      }) {
        var method_url = `/v1/website/${domain}/related-apps/related-apps`;
        var params = {
          store: store,
          format: format,
        };
        var report = new SimilarWebApp().connect(this.apikey, method_url, params);
        if (report) {
          return report.related_apps;
        } else {
          return
        }
      }
      RelatedSites({
        appId,
        country,
        store,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/RelatedSites/related-sites`;
        var params = {
          country: country,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      AudienceInterests({
        appId,
        country,
        store,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/audience-interests/also-used-apps`;
        var params = {
          country: country,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      AppRank({
        appId,
        country,
        category,
        mode,
        device,
        duration,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/rank/app-store-rank`;
        var params = {
          country: country,
          category: category,
          mode: mode,
          device: device,
          duration: duration,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      TopAppStores({
        country,
        category,
        store,
        mode,
        device,
        format
      }) {
        var method_url = `/v1/appCategory/rank/StoreRank/top-apps`;
        var params = {
          country: country,
          category: category,
          store: store,
          mode: mode,
          device: device,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      TopAndroidAppsUsage({
        country,
        category,
        store,
        mode,
        device,
        format
      }) {
        var method_url = `/v1/appCategory/${store}/UsageRank/top-apps`;
        var params = {
          country: country,
          category: category,
          mode: mode,
          device: device,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  MobileAppsEngagement() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      InstallPenetration({
        appId,
        store,
        start_date,
        end_date,
        country,
        granularity,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/engagement/current-installs`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      DailyActiveUsers({
        appId,
        start_date,
        end_date,
        country,
        granularity,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/engagement/dau`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      UniqueInstalls({
        appId,
        start_date,
        end_date,
        country,
        granularity,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/engagement/unique-installs`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MonthlyActiveUsersAndroid({
        appId,
        start_date,
        end_date,
        country,
        granularity,
        format
      }) {
        var method_url = `/v1/app/Google/${appId}/engagement/mau`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      MonthlyActiveUsersIOS({
        appId,
        start_date,
        end_date,
        country,
        granularity,
        format
      }) {
        var method_url = `/v1/app/Apple/${appId}/engagement/mau`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      AppDownloads({
        appId,
        start_date,
        end_date,
        country,
        granularity,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/engagement/downloads`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          granularity: granularity,
          format: format,
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      AppDemographicsGender({
        appId,
        country,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/demographics/gender`;
        var params = {
          country: country,
          format: format
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      AppDemographicsAge({
        appId,
        country,
        format
      }) {
        var method_url = `/v1/app/${store}/${appId}/demographics/age`;
        var params = {
          country: country,
          format: format
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
  SalesSolution() {
    var data = class Data_ {
      constructor(apikey) {
        this.apikey = apikey;
      }
      LeadEnrichment({
        domain,
        start_date,
        end_date,
        country,
        main_domain_only,
        format,
        show_verified
      }) {
        var method_url = `/v1/website/${domain}/lead-enrichment/all`;
        var params = {
          start_date: start_date,
          end_date: end_date,
          country: country,
          main_domain_only: main_domain_only,
          format: format,
          show_verified: show_verified
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
      Technographics({
        domain,
        format
      }) {
        var method_url = `/v1/website/${domain}/technographics/all`;
        var params = {
          format: format
        };
        return new SimilarWebApp().connect(this.apikey, method_url, params);
      }
    };
    return new data(this.apikey);
  }
}

