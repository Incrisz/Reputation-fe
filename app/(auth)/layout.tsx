import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-nav-layout="vertical"
      data-theme-mode="light"
      data-header-styles="transparent"
      data-width="fullwidth"
      data-menu-styles="transparent"
      data-page-style="flat"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/dashboard/images/brand-logos/favicon.ico" type="image/x-icon" />
        <link id="style" href="/dashboard/libs/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/dashboard/css/styles.css" rel="stylesheet" />
        <link href="/dashboard/css/icons.css" rel="stylesheet" />
        <link href="/dashboard/libs/node-waves/waves.min.css" rel="stylesheet" />
        <link href="/dashboard/libs/simplebar/simplebar.min.css" rel="stylesheet" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .divider {
                display: flex;
                align-items: center;
                margin: 20px 0;
              }
              .divider::before,
              .divider::after {
                content: '';
                flex: 1;
                height: 1px;
                background-color: #e0e0e0;
              }
              .divider span {
                padding: 0 10px;
                color: #999;
                font-size: 14px;
              }
              .google-btn {
                border: 1px solid #e0e0e0;
                padding: 10px;
                border-radius: 5px;
                width: 100%;
                text-align: center;
                font-weight: 500;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                background: transparent;
              }
              .google-btn:hover {
                border-color: #4285f4;
                background-color: #f9f9f9;
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
