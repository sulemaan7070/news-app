import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Russia Vs Ukraine War Update Live | Russians Retreat From Kherson | Ukraine News | News18 Live - CNN-News18",
      description:
        "Russia Vs Ukraine War Update Live | Russians Retreat From Kherson | Ukraine News | News18 LiveTens of thousands of civilians and Russian-appointed officials ...",
      url: "https://www.youtube.com/watch?v=dSGksruu8L8",
      urlToImage: "https://i.ytimg.com/vi/dSGksruu8L8/maxresdefault_live.jpg",
      publishedAt: "2022-10-29T10:37:10Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Heather Chen, Philip Wang, Angus Watson",
      title: "45 dead as Tropical Storm Nalgae hits Philippines - CNN",
      description:
        "Tropical Storm Nalgae has killed at least 45 people and injured dozens more in the Philippines, the country's disaster agency said Saturday.",
      url: "https://www.cnn.com/2022/10/28/asia/tropical-storm-nalgae-paeng-philippines-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221028202630-03-philippines-tropical-storm-nalgae-102822.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-10-29T09:45:00Z",
      content:
        "Tropical Storm Nalgae has killed at least 45 people and injured dozens more in the Philippines, the countrys disaster agency said Saturday.\r\nA further 14 people were missing after the storm, known lo… [+1188 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "Mike Axisa",
      title:
        "World Series score: Phillies grab Game 1 vs. Astros as J.T. Realmuto's home run caps huge comeback - CBS Sports",
      description:
        "Philadelphia dug its way out of a five-run hole against Justin Verlander to take Game 1 in Houston",
      url: "https://www.cbssports.com/mlb/news/world-series-score-phillies-grab-game-1-vs-astros-as-jt-realmutos-home-run-caps-huge-comeback/live/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/10/29/e7d2c024-a932-45b2-9723-fb00d51d5a9e/thumbnail/1200x675/4b880226a64350de0c1e3a0bc8e942c2/jt-world-series-getty.png",
      publishedAt: "2022-10-29T09:45:00Z",
      content:
        "The Philadelphia Phillies defeated the Houston Astros, 6-5, on Friday night in a drama-filled Game 1 of the 2022 World Series. The Phillies, who came back from a five-run deficit, now possess a 1-0 l… [+8866 chars]",
    },
    {
      source: {
        id: null,
        name: "Daily Beast",
      },
      author: "David Axe",
      title:
        "Scientists Fear New COVID Strains Are Deadly—Just Like 2020 Wave - The Daily Beast",
      description:
        "The most recent COVID variants have been more contagious but less deadly. Early evidence suggests the new mutations could be much more dangerous and drive hospitalizations back up.",
      url: "https://www.thedailybeast.com/scientists-fear-bq1-covid-variants-are-deadly-like-the-2020-wave",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1667006773/102922-axe-covid-hero_tvuiky",
      publishedAt: "2022-10-29T07:48:04Z",
      content:
        "The new COVID-19 subvariants that are becoming dominant all over the world arent just more contagious than previous variants and subvariantsthey might cause more severe disease, too.\r\nThats an ominou… [+5167 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Ukraine war: Kyiv set for longer power cuts after air strikes - BBC",
      description:
        "Russian strikes on energy infrastructure leave Ukrainians facing power cuts of more than four hours.",
      url: "https://www.bbc.com/news/world-europe-63435586",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/24FF/production/_127417490_mediaitem127417489.jpg",
      publishedAt: "2022-10-29T05:49:04Z",
      content:
        "The Ukrainian authorities have warned people in the capital Kyiv to expect longer power cuts, lasting more than four hours, because of Russian attacks on energy infrastructure.\r\nRolling blackouts are… [+3422 chars]",
    },
    {
      source: {
        id: null,
        name: "MassLive.com",
      },
      author: "Brian Robb | brobb@masslive.com",
      title:
        "Jaylen Brown wants to help Donda Academy students after school reportedly closes - MassLive.com",
      description:
        "Jaylen Brown decided to leave Kanye West's Donda Sports this week but he still wants to help those students impacted by the reported closing of Donda Academy.",
      url: "https://www.masslive.com/celtics/2022/10/jaylen-brown-wants-to-help-donda-academy-students-after-school-reportedly-closes.html",
      urlToImage:
        "https://www.masslive.com/resizer/xJ13mQoMsRg2EwWJN4-hSvGTz68=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/JZ45KN5YWNEM7KDDWGPZVDZ54U.jpg",
      publishedAt: "2022-10-29T05:23:00Z",
      content:
        "Jaylen Brown said that hes leaving Kanye Wests Donda Sports earlier this week and spoke about that decision for the first time after the Celtics loss to the Cavaliers on Friday night at TD Garden.\r\nW… [+2454 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Jack Baer",
      title:
        "Nets owner Joe Tsai condemns Kyrie Irving's tweeting of antisemitic video - Yahoo Sports",
      description:
        'The Nets star\'s video was "full of anti-semitic disinformation," according to the billionaire.',
      url: "https://sports.yahoo.com/nets-owner-joe-tsai-condemns-kyrie-irvings-tweeting-antisemitic-video-044809514.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/uF0WFbOVT.UMAYPMfKG0Qw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-10/9aa4fd10-5744-11ed-bfeb-aaea7afd0883",
      publishedAt: "2022-10-29T04:48:00Z",
      content:
        "Kyrie Irving's latest venture into conspiracy theories and controversy has drawn condemnation from Brooklyn Nets team owner Joe Tsai and his own team for its clear antisemitism.\r\nOn Thursday, the Net… [+2594 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Kristina Sgueglia, Zenebou Sylla, Justin Lear, Laura Ly",
      title:
        "At least 6 people injured in shooting outside Pittsburgh funeral, officials say - CNN",
      description:
        "At least six people were injured after a shooting erupted Friday outside a church in Pittsburgh where a funeral was taking place, police said.",
      url: "https://www.cnn.com/2022/10/28/us/pittsburgh-funeral-service-shooting/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221028105419-02-pittsburgh-shots-fired.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-10-29T04:25:00Z",
      content:
        "At least six people were injured after a shooting erupted Friday outside a church in Pittsburgh where a funeral was taking place, police said. \r\nOne victim originally reported in critical condition i… [+3389 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Chloe Melas",
      title: "Tom Brady and Gisele Bündchen announce divorce - CNN",
      description:
        "Tom Brady and Gisele Bündchen on Friday announced they are divorcing after 13 years of marriage.",
      url: "https://www.cnn.com/2022/10/28/entertainment/tom-brady-gisele-bndchen/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221028102236-tom-brady-gisele-bundchen-2019-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-10-29T03:26:00Z",
      content:
        "Tom Brady and Gisele Bündchen on Friday announced they are divorcing after 13 years of marriage. \r\nWe arrived at this decision amicably and with gratitude for the time we spent together. We are bless… [+2747 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Obama campaigns in Atlanta with one simple message: Keep Democrats in office - 11Alive",
      description:
        "The former president gave a 35-minute speech that touched on everything from abortion to election denialism.",
      url: "https://www.youtube.com/watch?v=r0uMoF4WHWY",
      urlToImage: "https://i.ytimg.com/vi/r0uMoF4WHWY/maxresdefault.jpg",
      publishedAt: "2022-10-29T03:18:53Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Bernie Zilio",
      title:
        "Matthew Perry had 'emergency' surgery days before 'Friends' reunion - Page Six",
      description:
        "Perry spoke to Sawyer ahead of the Nov. 1 release of his highly anticipated tell-all, “Friends, Lovers, and the Big Terrible Thing: A Memoir.”",
      url: "https://pagesix.com/2022/10/28/matthew-perry-had-emergency-surgery-days-before-friends-reunion/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/10/matthew-perry-dateline.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-10-29T02:00:00Z",
      content:
        "Matthew Perry revealed he had to undergo “emergency dental surgery” days before filming the “Friends” reunion last April.\r\n“They did all sorts of things,” the actor, 53, told Diane Sawyer during a si… [+6010 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Ali Dukakis",
      title:
        "Federal judge in Arizona declines restraining order to block group from surveilling voters - ABC News",
      description:
        'He ruled the activity did not fall into the category of "voter intimidation."',
      url: "https://abcnews.go.com/US/judge-arizona-denies-injunction-block-group-gathering-ballot/story?id=92315573",
      urlToImage:
        "https://s.abcnews.com/images/US/arizona-drop-box-gty-jef-221028_1666997506285_hpMain_16x9_992.jpg",
      publishedAt: "2022-10-29T01:41:15Z",
      content:
        "A federal judge in Arizona Friday declined to issue a temporary restraining order and preliminary injunction to keep several people accused of voter intimidation from gathering near ballot boxes and … [+2502 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: '2022 Apple iPad Pro M2 11" Review - MobileTechReview',
      description:
        "The 2022 refresh of the iPad Pro puts Apple’s M2 processor front and center. We look at the smaller 11” iPad Pro 4th gen that starts at $799. It’s available ...",
      url: "https://www.youtube.com/watch?v=Yp_B3WcTFgk",
      urlToImage: "https://i.ytimg.com/vi/Yp_B3WcTFgk/maxresdefault.jpg",
      publishedAt: "2022-10-29T01:24:21Z",
      content: null,
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Lena H. Sun",
      title:
        "Flu season 2022 started a month early, severity is highest in 13 years - The Washington Post",
      description:
        "The flu has hospitalized a record number of people this season, underscoring the potential for a perilous winter of respiratory viruses with covid-19 and RSV.",
      url: "https://www.washingtonpost.com/health/2022/10/28/flu-season-2022-cdc/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Z5G52TSOEQI63LNIATTONP4LDE.jpg&w=1440",
      publishedAt: "2022-10-29T00:45:00Z",
      content:
        "Comment on this story\r\nInfluenza is hitting the United States unusually early and hard, resulting in the most hospitalizations at this point in the season in more than a decade and underscoring the p… [+7486 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Editorial Board",
      title:
        "Opinion | The Pelosi attack should spur more security for U.S. leaders - The Washington Post",
      description:
        "Can the most powerful country in the world protect its leaders?",
      url: "https://www.washingtonpost.com/opinions/2022/10/28/pelosi-house-attack-congress-security-protection/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VRDNTVCW5MI63LELBC57VMOFUU.jpg&w=1440",
      publishedAt: "2022-10-29T00:30:00Z",
      content:
        "Comment on this story\r\nThere is much we still dont know about the Friday attack on House Speaker Nancy Pelosis (D-Calif.) house. But the facts that have emerged so far are horrifying and raise a ques… [+4079 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Exclusive: United States to put United Nations focus on Iran protests - Reuters.com",
      description:
        "The United States will next week put the United Nations spotlight on protests in Iran sparked by the death of a young woman in police custody and look for ways to promote credible, independent investigations into Iranian human rights abuses.",
      url: "https://www.reuters.com/world/exclusive-united-states-put-united-nations-focus-iran-protests-2022-10-28/",
      urlToImage:
        "https://www.reuters.com/resizer/Su7C1TeuXD53QKZk06YqURD1zso=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JXMFJL43HFPY7AAPZD4L4H5CPU.jpg",
      publishedAt: "2022-10-29T00:26:00Z",
      content:
        "UNITED NATIONS, Oct 28 (Reuters) - The United States will next week put the United Nations spotlight on protests in Iran sparked by the death of a young woman in police custody and look for ways to p… [+2662 chars]",
    },
    {
      source: {
        id: null,
        name: "Investor's Business Daily",
      },
      author: "Investor's Business Daily",
      title:
        "Market Revs Higher, Time To Step On Gas? Fed Looms - Investor's Business Daily",
      description:
        "Fed pivot hopes were a big tailwind. Here are 5 stocks near buy points with earnings due.",
      url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-revs-higher-fed-meeting-looms/",
      urlToImage:
        "https://www.investors.com/wp-content/uploads/2020/11/Stock-FastGreenCar-adobe.jpg",
      publishedAt: "2022-10-29T00:09:00Z",
      content:
        "Dow Jones futures will open on Sunday evening, along with S&amp;P 500 futures and Nasdaq futures, with earnings season still in full swing. But investor focus also will turn to a pivotal Federal Rese… [+10966 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "All you need to know about most divisive vote in Brazil’s history - Al Jazeera English",
      description:
        "Jair Bolsonaro and Lula da Silva face off amid concerns over political violence, disinformation and future of democracy.",
      url: "https://www.aljazeera.com/news/2022/10/28/all-you-need-to-know-about-most-divisive-vote-in-brazils-history",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/10/2022-10-26T232629Z_165224623_RC299X9TCER8_RTRMADP_3_BRAZIL-ELECTION.jpg?resize=1920%2C1440",
      publishedAt: "2022-10-28T23:50:11Z",
      content:
        "Brazilians are heading to the polls after what has been described as the countrys most polarised election campaign, pitting far-right President Jair Bolsonaro against his left-wing rival, Luiz Inacio… [+6756 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Amazon shares slump, Big Tech peers stay afloat - Reuters.com",
      description:
        'Amazon.com Inc\'s <a href="https://www.reuters.com/companies/AMZN.O" target="_blank">(AMZN.O)</a> shares fell about 8% on Friday after forecasting holiday-quarter sales below Wall Street estimates, while its Big Tech peers recovered from a bruising selloff thi…',
      url: "https://www.reuters.com/technology/amazon-slumps-tech-selloff-worsens-2022-10-28/",
      urlToImage:
        "https://www.reuters.com/resizer/0SgHdOrFOXSw-qNrJzTSWv2LLMQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IOZLRTKR6JNPRDD4LOIBKQ446Y.jpg",
      publishedAt: "2022-10-28T23:41:00Z",
      content:
        "Oct 28 (Reuters) - Amazon.com Inc's (AMZN.O) shares fell about 8% on Friday after forecasting holiday-quarter sales below Wall Street estimates, while its Big Tech peers recovered from a bruising sel… [+2157 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Chris Pandolfo",
      title:
        "Liz Cheney's PAC spends $500,000 in Arizona to defeat GOP nominee Kari Lake - Fox Business",
      description:
        "Liz Cheney PAC spends $500,000 on attack ad targeting Arizona Republicans Kari Lake and Mark Finchem.",
      url: "https://www.foxbusiness.com/politics/republican-liz-cheneys-pac-spends-500000-arizona-defeat-gop-nominee-kari-lake",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/pt1.png?ve=1&tl=1",
      publishedAt: "2022-10-28T23:39:35Z",
      content:
        "Republican Rep. Liz Cheney (R-Wyo.) is targeting Arizona Republicans for defeat with a new $500,000 ad buy from her PAC attacking the GOP nominees for governor and secretary of state. \r\n\"I don't know… [+2658 chars]",
    },
  ];
  constructor() {
    super();
    console.log("iam from constructor from news");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="contrainer my-3 mx-3">
        <h2>News app Top Headlines</h2>

        <div className="row">
          {this.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
