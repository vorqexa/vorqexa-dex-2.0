import { siteConfig } from "@/config/site";

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "steps"; items: readonly { title: string; text: string }[] }
  | { type: "callout"; label: string; text: string }
  | {
      type: "entries";
      items: readonly { title: string; text: string; href?: string }[];
    };

export type DocSection = {
  /** URL hash and sidebar anchor. */
  id: string;
  /** Short sidebar label. */
  label: string;
  /** Heading shown in the page (the number is added automatically). */
  title: string;
  blocks: readonly DocBlock[];
};

export const docsIntro = {
  eyebrow: "Vorqexa documentation",
  title: "Welcome to Vorqexa",
  lead: "Vorqexa is a perpetual trading platform built around a clear, focused trading experience.",
  paragraphs: [
    "These docs explain what Vorqexa is, how the trading flow works, and what to expect when using the platform.",
    "We aim to keep the product straightforward and the information around it clear, including the role of the technology that supports the trading experience.",
  ],
};

export const docsSections: readonly DocSection[] = [
  {
    id: "overview",
    label: "Overview",
    title: "What Is Vorqexa?",
    blocks: [
      {
        type: "p",
        text: "Vorqexa is a user-facing perpetual trading platform for supported markets. It brings market information, order placement, position management, and account tools into one trading experience.",
      },
      { type: "p", text: "Vorqexa focuses on the product and the experience around it, including:" },
      {
        type: "list",
        items: [
          "Market discovery",
          "Orderbook-based trading",
          "Trading account setup",
          "Order and position management",
          "Portfolio and PnL information",
          "Wallet connectivity",
          "A simple, user-focused interface",
        ],
      },
    ],
  },
  {
    id: "how-it-works",
    label: "How it works",
    title: "How Vorqexa Works",
    blocks: [
      { type: "h3", text: "Start Trading" },
      {
        type: "p",
        text: "Getting started takes a few setup steps. Connecting a wallet is only the beginning; your trading account must be created, trading enabled, and the account funded before you can place a trade.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Connect Your Wallet",
            text: "Connect a compatible wallet to the Vorqexa trading application.",
          },
          {
            title: "Create Your Trading Account",
            text: "After your wallet is connected, create your trading account to access the trading features.",
          },
          {
            title: "Enable Trading",
            text: "Complete the required setup and enable trading for your account.",
          },
          {
            title: "Deposit Funds",
            text: "Deposit supported assets into your trading account before placing an order.",
          },
          {
            title: "Choose a Market",
            text: "Select a supported perpetual market and review its price information and orderbook.",
          },
          {
            title: "Place an Order",
            text: "Choose an available order type, set your parameters, review the order, and submit it.",
          },
          {
            title: "Execution",
            text: "Once submitted, your order is processed by the trading infrastructure supporting Vorqexa and handled according to the applicable market rules.",
          },
          {
            title: "Manage Your Position",
            text: "After execution, monitor your position, margin, PnL, and other available trading information through Vorqexa.",
          },
        ],
      },
      {
        type: "callout",
        label: "The flow:",
        text: "Connect Wallet → Create Account → Enable Trading → Deposit → Choose Market → Place Order → Execute → Manage Position",
      },
    ],
  },
  {
    id: "trading",
    label: "Trading",
    title: "Trading",
    blocks: [
      { type: "h3", text: "Orderbook Trading" },
      {
        type: "p",
        text: "Vorqexa provides an orderbook-based trading experience. The orderbook displays available buy and sell interest for supported markets and gives traders a clear view of the market before submitting an order.",
      },
      { type: "h3", text: "Orders" },
      {
        type: "p",
        text: "The order types available on Vorqexa depend on the current trading configuration. They may include market, limit, Immediate-or-Cancel (IOC), Fill-or-Kill (FOK), Post-Only, and Reduce-Only orders.",
      },
      {
        type: "p",
        text: "Order availability can change. Always check the live trading interface before submitting an order.",
      },
      { type: "h3", text: "Positions & PnL" },
      {
        type: "p",
        text: "After an order is executed, your position can be monitored through the trading interface. Depending on the market and current platform functionality, available information may include position size, entry price, mark price, unrealized PnL, realized PnL, margin, leverage, and liquidation information.",
      },
    ],
  },
  {
    id: "funds",
    label: "Accounts & deposits",
    title: "Accounts & Deposits",
    blocks: [
      { type: "h3", text: "Trading Account" },
      {
        type: "p",
        text: "Your wallet and your trading account serve different purposes in the trading flow. After connecting your wallet, you create the trading account, complete the required setup, and enable trading before funding the account.",
      },
      { type: "h3", text: "Depositing" },
      {
        type: "p",
        text: "Before trading, deposit supported assets into your trading account. The available assets, networks, and deposit process can change as the platform develops.",
      },
      { type: "p", text: "Before confirming a deposit, always verify:" },
      {
        type: "list",
        items: [
          "The asset",
          "The supported network",
          "The destination",
          "Any applicable transaction or network fees",
        ],
      },
      { type: "p", text: "Only deposit supported assets through the official Vorqexa application." },
    ],
  },
  {
    id: "perpetuals",
    label: "Perpetuals",
    title: "Perpetual Trading",
    blocks: [
      { type: "h3", text: "What Are Perpetuals?" },
      {
        type: "p",
        text: "Perpetual contracts are derivative instruments that allow traders to take long or short positions without a traditional expiration date.",
      },
      {
        type: "p",
        text: "Perpetual trading can involve leverage. Leverage can increase the size of potential gains, but it can also increase losses and the risk of liquidation.",
      },
      {
        type: "p",
        text: "Before trading, make sure you understand margin, leverage, liquidation, funding, slippage, fees, and market volatility.",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees",
    title: "Fees",
    blocks: [
      {
        type: "p",
        text: "Trading costs depend on the market and the current platform configuration. Possible costs include trading fees, funding payments, network fees, and other applicable transaction costs.",
      },
      {
        type: "p",
        text: "Always review the current fee information shown by Vorqexa before trading. Do not rely on outdated documentation or third-party fee information.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    title: "Security & Wallet Safety",
    blocks: [
      { type: "h3", text: "Protect Your Wallet" },
      {
        type: "p",
        text: "Vorqexa uses compatible wallets to give users access to the trading application. Your wallet is an important part of your security, so always verify that you are using the official Vorqexa website before connecting.",
      },
      {
        type: "p",
        text: "Never share your seed phrase, private key, recovery phrase, or wallet password. Vorqexa will never ask you for these credentials.",
      },
      {
        type: "p",
        text: "Before approving a transaction or signing a message, read the request carefully and make sure you understand what your wallet is asking you to approve.",
      },
      { type: "h3", text: "Trading Risk" },
      {
        type: "p",
        text: "Perpetual trading involves substantial risk. Market volatility, leverage, liquidation, funding costs, slippage, wallet security, smart-contract risk, network risk, and infrastructure dependencies can all affect your trading experience.",
      },
    ],
  },
  {
    id: "markets",
    label: "Markets",
    title: "Markets & Availability",
    blocks: [
      {
        type: "p",
        text: "Vorqexa supports the markets, assets, and networks currently available through the live platform.",
      },
      {
        type: "p",
        text: "Availability can change as the platform develops. The live Vorqexa trading application should be treated as the most current source for available markets and functionality.",
      },
      { type: "p", text: "Always verify the asset and network before depositing or trading." },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    title: "Infrastructure",
    blocks: [
      { type: "h3", text: "How the Platform Is Supported" },
      {
        type: "p",
        text: "Vorqexa is the product and user-facing trading experience. To support core perpetual trading functionality, Vorqexa uses established third-party trading infrastructure.",
      },
      {
        type: "p",
        text: "Vorqexa works with a third party for parts of its trading infrastructure, through a strategic partnership with our partners.",
      },
      {
        type: "p",
        text: "This allows the Vorqexa team to focus on building the product, interface, user experience, brand, and community while relying on established infrastructure for core trading services.",
      },
      { type: "h3", text: "What This Means for Users" },
      {
        type: "p",
        text: "You interact with Vorqexa as the trading platform. The underlying infrastructure operates behind the scenes to support the trading functionality you use.",
      },
      {
        type: "p",
        text: "We do not present third-party infrastructure as technology independently developed by Vorqexa.",
      },
    ],
  },
  {
    id: "faq",
    label: "FAQ",
    title: "Frequently Asked Questions",
    blocks: [
      {
        type: "entries",
        items: [
          {
            title: "What is Vorqexa?",
            text: "Vorqexa is a perpetual trading platform focused on providing a simple, modern, and straightforward trading experience.",
          },
          {
            title: "What happens after I connect my wallet?",
            text: "After connecting your wallet, you create your trading account, enable trading, and deposit supported assets before placing a trade.",
          },
          {
            title: "Can I trade immediately after connecting my wallet?",
            text: "No. Wallet connection is the first step. You need to complete account creation, enable trading, and deposit supported assets before trading.",
          },
          {
            title: "Does Vorqexa use third-party infrastructure?",
            text: "Yes. We work with a third party for parts of our trading infrastructure, through a strategic partnership with our partners. This lets us focus on the product, the interface, and the overall trading experience.",
          },
          {
            title: "Is Vorqexa the same as its infrastructure partner?",
            text: "No. Vorqexa is the product and user-facing trading platform. Parts of the underlying trading infrastructure are provided by a third party through our partnerships.",
          },
          {
            title: "Does Vorqexa hold my private keys?",
            text: "Vorqexa does not ask users to provide private keys, seed phrases, recovery phrases, or wallet passwords.",
          },
          {
            title: "Is perpetual trading safe?",
            text: "Perpetual trading carries significant risk. Leverage can amplify losses, and positions can be liquidated. Only trade with funds you can afford to lose.",
          },
          {
            title: "Where can I see available markets?",
            text: "The live Vorqexa trading application provides the current list of supported markets and available functionality.",
          },
        ],
      },
    ],
  },
  {
    id: "glossary",
    label: "Glossary",
    title: "Glossary",
    blocks: [
      {
        type: "entries",
        items: [
          { title: "Orderbook", text: "A collection of active buy and sell orders for a market." },
          {
            title: "Perpetual",
            text: "A derivative contract designed to allow traders to maintain positions without a traditional expiration date.",
          },
          { title: "Margin", text: "Collateral used to support a trading position." },
          {
            title: "Leverage",
            text: "The use of collateral to control a larger position. Leverage can amplify both gains and losses.",
          },
          {
            title: "Liquidation",
            text: "The forced closing of a position when the required margin is no longer maintained.",
          },
          {
            title: "Funding",
            text: "Periodic payments between positions in a perpetual market that help keep the contract price aligned with the underlying market.",
          },
          {
            title: "PnL",
            text: "Profit and Loss, representing the financial result of a trading position.",
          },
          {
            title: "Slippage",
            text: "The difference between the expected execution price and the actual execution price.",
          },
        ],
      },
    ],
  },
  {
    id: "disclaimer",
    label: "Disclaimer",
    title: "Disclaimer",
    blocks: [
      {
        type: "p",
        text: "Vorqexa documentation is provided for informational and educational purposes only. Nothing on the Vorqexa website or in these documents constitutes financial, investment, legal, tax, or other professional advice.",
      },
      {
        type: "p",
        text: "Trading digital assets and derivatives involves significant risk, including the potential loss of capital. Users should conduct their own research and decide whether trading is appropriate for their circumstances.",
      },
      {
        type: "p",
        text: "Platform functionality, markets, fees, networks, and infrastructure may change without notice.",
      },
    ],
  },
  {
    id: "resources",
    label: "Official resources",
    title: "Official Resources",
    blocks: [
      {
        type: "entries",
        items: [
          {
            title: "Launch App",
            text: "Open the Vorqexa trading platform.",
            href: siteConfig.dexUrl,
          },
          {
            title: "Documentation",
            text: "Read this guide to understand the platform and trading flow.",
            href: "/docs",
          },
          {
            title: "GitHub",
            text: "Explore Vorqexa's public development resources.",
            href: siteConfig.socials.github,
          },
          {
            title: "Community",
            text: "Join the Vorqexa community for updates and discussion.",
            href: siteConfig.socials.telegram,
          },
          {
            title: "Infrastructure",
            text: "Vorqexa works with a third party for parts of its trading infrastructure, through a strategic partnership with our partners.",
          },
        ],
      },
    ],
  },
];
