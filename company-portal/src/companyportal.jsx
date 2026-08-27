import React, { useState } from "react";
import "./CompanyPortal.css";

function CompanyPortal() {
  const [activePage, setActivePage] = useState("Dashboard");

  const orders = [
    {
      id: "ORD-1042",
      product: "Industrial Bearing",
      quantity: 120,
      status: "In Transit",
      eta: "Today, 6:30 PM",
    },
    {
      id: "ORD-1041",
      product: "Hydraulic Pump",
      quantity: 45,
      status: "Processing",
      eta: "Tomorrow",
    },
    {
      id: "ORD-1040",
      product: "Drive Belt",
      quantity: 200,
      status: "Delivered",
      eta: "Delivered",
    },
    {
      id: "ORD-1039",
      product: "Control Valve",
      quantity: 75,
      status: "Delayed",
      eta: "Aug 29",
    },
  ];

  const navigation = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Orders", icon: "▣" },
    { name: "Inventory", icon: "◫" },
    { name: "Suppliers", icon: "♙" },
    { name: "AI Planner", icon: "✦" },
    { name: "Tracking", icon: "⌖" },
    { name: "Analytics", icon: "▥" },
  ];

  const stats = [
    {
      title: "Active Orders",
      value: "24",
      change: "+8.2%",
      icon: "📦",
    },
    {
      title: "In Transit",
      value: "11",
      change: "+3.4%",
      icon: "🚚",
    },
    {
      title: "Delayed",
      value: "3",
      change: "-12.5%",
      icon: "⚠️",
    },
    {
      title: "On-Time Rate",
      value: "94.7%",
      change: "+2.1%",
      icon: "✓",
    },
  ];

  return (
    <div className="company-portal">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">S</div>

          <div>
            <h2>spareflow</h2>
            <span>AI SUPPLY CHAIN</span>
          </div>
        </div>

        <div className="company-label">
          COMPANY PORTAL
        </div>

        <nav className="navigation">

          {navigation.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >

              <span className="nav-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

              {item.name === "AI Planner" && (
                <span className="ai-badge">
                  AI
                </span>
              )}

            </button>
          ))}

        </nav>

        <div className="sidebar-bottom">

          <div className="system-status">

            <div className="status-dot"></div>

            <div>
              <strong>
                System Operational
              </strong>

              <span>
                All services running
              </span>
            </div>

          </div>

          <button className="settings-button">
            ⚙ Settings
          </button>

        </div>

      </aside>

      {/* ================= MAIN CONTENT ================= */}

      <main className="main-content">

        {/* TOP BAR */}

        <header className="topbar">

          <div>
            <h1>
              {activePage}
            </h1>

            <p>
              {activePage === "Dashboard"
                ? "Overview of your supply chain"
                : `Manage your ${activePage.toLowerCase()}`}
            </p>
          </div>

          <div className="topbar-actions">

            <button className="notification-button">
              🔔
              <span className="notification-dot"></span>
            </button>

            <div className="user-profile">

              <div className="avatar">
                AC
              </div>

              <div className="user-details">

                <strong>
                  Acme Components
                </strong>

                <span>
                  Operations Manager
                </span>

              </div>

              <span className="dropdown">
                ▼
              </span>

            </div>

          </div>

        </header>

        {/* ================= DASHBOARD ================= */}

        {activePage === "Dashboard" && (

          <div className="dashboard">

            {/* AI ALERT */}

            <section className="ai-alert">

              <div className="ai-alert-icon">
                ✦
              </div>

              <div className="ai-alert-content">

                <div className="ai-title">

                  <strong>
                    AI Supply Chain Alert
                  </strong>

                  <span>
                    LIVE
                  </span>

                </div>

                <p>
                  Your AI planner detected a potential
                  supply disruption affecting{" "}
                  <strong>ORD-1039</strong>.
                  A revised fulfillment plan is ready
                  for review.
                </p>

              </div>

              <button
                className="review-button"
                onClick={() =>
                  setActivePage("AI Planner")
                }
              >
                Review Plan →
              </button>

            </section>

            {/* STAT CARDS */}

            <section className="stats-grid">

              {stats.map((stat) => (

                <div
                  className="stat-card"
                  key={stat.title}
                >

                  <div className="stat-top">

                    <span className="stat-title">
                      {stat.title}
                    </span>

                    <div className="stat-icon">
                      {stat.icon}
                    </div>

                  </div>

                  <div className="stat-bottom">

                    <strong>
                      {stat.value}
                    </strong>

                    <span className="stat-change">
                      {stat.change}
                    </span>

                  </div>

                </div>

              ))}

            </section>

            {/* ORDERS + AI INSIGHTS */}

            <section className="content-grid">

              {/* RECENT ORDERS */}

              <div className="panel orders-panel">

                <div className="panel-header">

                  <div>
                    <h2>
                      Recent Orders
                    </h2>

                    <p>
                      Latest fulfillment activity
                    </p>
                  </div>

                  <button
                    className="view-all"
                    onClick={() =>
                      setActivePage("Orders")
                    }
                  >
                    View all →
                  </button>

                </div>

                <div className="orders-table">

                  <div className="table-header">

                    <span>ORDER</span>
                    <span>PRODUCT</span>
                    <span>QTY</span>
                    <span>STATUS</span>
                    <span>ETA</span>

                  </div>

                  {orders.map((order) => (

                    <div
                      className="table-row"
                      key={order.id}
                    >

                      <strong>
                        {order.id}
                      </strong>

                      <span>
                        {order.product}
                      </span>

                      <span>
                        {order.quantity}
                      </span>

                      <span>

                        <span
                          className={`status ${order.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {order.status}
                        </span>

                      </span>

                      <span>
                        {order.eta}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* AI INSIGHTS */}

              <div className="panel insights-panel">

                <div className="panel-header">

                  <div>
                    <h2>
                      AI Insights
                    </h2>

                    <p>
                      Real-time recommendations
                    </p>
                  </div>

                  <div className="sparkle">
                    ✦
                  </div>

                </div>

                {/* INSIGHT 1 */}

                <div className="insight">

                  <div className="insight-icon warning">
                    ⚠
                  </div>

                  <div>

                    <strong>
                      Potential delay detected
                    </strong>

                    <p>
                      Supplier S-204 may miss the
                      delivery window by 6 hours.
                    </p>

                    <button
                      onClick={() =>
                        setActivePage("AI Planner")
                      }
                    >
                      View recommendation →
                    </button>

                  </div>

                </div>

                {/* INSIGHT 2 */}

                <div className="insight">

                  <div className="insight-icon success">
                    ✓
                  </div>

                  <div>

                    <strong>
                      Inventory optimization
                    </strong>

                    <p>
                      Reduce safety stock for Drive
                      Belts by 8% based on demand.
                    </p>

                    <button
                      onClick={() =>
                        setActivePage("Inventory")
                      }
                    >
                      View analysis →
                    </button>

                  </div>

                </div>

                {/* INSIGHT 3 */}

                <div className="insight">

                  <div className="insight-icon ai">
                    ✦
                  </div>

                  <div>

                    <strong>
                      Alternative supplier found
                    </strong>

                    <p>
                      AI found a supplier that can
                      fulfill ORD-1039 one day earlier.
                    </p>

                    <button
                      onClick={() =>
                        setActivePage("Suppliers")
                      }
                    >
                      Compare suppliers →
                    </button>

                  </div>

                </div>

              </div>

            </section>

            {/* ================= BOTTOM SECTION ================= */}

            <section className="bottom-grid">

              {/* SUPPLY CHAIN HEALTH */}

              <div className="panel health-panel">

                <div className="panel-header">

                  <div>

                    <h2>
                      Supply Chain Health
                    </h2>

                    <p>
                      Current network performance
                    </p>

                  </div>

                  <span className="healthy">
                    ● Healthy
                  </span>

                </div>

                <div className="health-content">

                  <div className="health-score">

                    <strong>
                      92
                    </strong>

                    <span>
                      /100
                    </span>

                  </div>

                  <div className="health-bar">

                    <div
                      className="health-fill"
                      style={{
                        width: "92%",
                      }}
                    ></div>

                  </div>

                  <div className="health-metrics">

                    <div>
                      <span>
                        Supplier Reliability
                      </span>

                      <strong>
                        96%
                      </strong>
                    </div>

                    <div>
                      <span>
                        Inventory Health
                      </span>

                      <strong>
                        89%
                      </strong>
                    </div>

                    <div>
                      <span>
                        Delivery Performance
                      </span>

                      <strong>
                        94%
                      </strong>
                    </div>

                  </div>

                </div>

              </div>

              {/* QUICK ACTIONS */}

              <div className="panel quick-panel">

                <div className="panel-header">

                  <div>

                    <h2>
                      Quick Actions
                    </h2>

                    <p>
                      Common operations
                    </p>

                  </div>

                </div>

                <div className="quick-actions">

                  <button
                    onClick={() =>
                      setActivePage("Orders")
                    }
                  >
                    <span>＋</span>
                    Create Order
                  </button>

                  <button
                    onClick={() =>
                      setActivePage("Tracking")
                    }
                  >
                    <span>⌖</span>
                    Track Shipment
                  </button>

                  <button
                    onClick={() =>
                      setActivePage("AI Planner")
                    }
                  >
                    <span>✦</span>
                    Run AI Planner
                  </button>

                  <button
                    onClick={() =>
                      setActivePage("Analytics")
                    }
                  >
                    <span>▥</span>
                    View Analytics
                  </button>

                </div>

              </div>

            </section>

          </div>

        )}

        {/* ================= OTHER PAGES ================= */}

        {activePage !== "Dashboard" && (

          <div className="placeholder-page">

            <div className="placeholder-icon">
              {
                navigation.find(
                  (item) =>
                    item.name === activePage
                )?.icon
              }
            </div>

            <h2>
              {activePage}
            </h2>

            <p>
              The {activePage} module is ready
              for backend integration.
            </p>

            {/* AI PLANNER */}

            {activePage === "AI Planner" && (

              <div className="planner-preview">

                <div className="planner-header">

                  <span>
                    ✦ AI PLANNER
                  </span>

                  <span className="live-label">
                    LIVE
                  </span>

                </div>

                <h3>
                  Self-Replanning Engine
                </h3>

                <p>
                  SpareFlow AI continuously monitors
                  orders, inventory, suppliers and
                  transportation. When conditions change,
                  it automatically generates a new
                  fulfillment plan.
                </p>

                <div className="plan-steps">

                  <div>
                    <span>1</span>
                    Detect disruption
                  </div>

                  <div>
                    <span>2</span>
                    Evaluate alternatives
                  </div>

                  <div>
                    <span>3</span>
                    Negotiate with suppliers
                  </div>

                  <div>
                    <span>4</span>
                    Generate optimized plan
                  </div>

                </div>

              </div>

            )}

            {/* ORDERS */}

            {activePage === "Orders" && (

              <div className="module-card">

                <h3>
                  Order Management
                </h3>

                <p>
                  Create, manage and monitor company
                  fulfillment orders.
                </p>

                <div className="module-stats">

                  <div>
                    <strong>24</strong>
                    <span>Active</span>
                  </div>

                  <div>
                    <strong>11</strong>
                    <span>In Transit</span>
                  </div>

                  <div>
                    <strong>3</strong>
                    <span>Delayed</span>
                  </div>

                </div>

              </div>

            )}

            {/* INVENTORY */}

            {activePage === "Inventory" && (

              <div className="module-card">

                <h3>
                  Inventory Intelligence
                </h3>

                <p>
                  AI-powered inventory monitoring and
                  demand-based stock optimization.
                </p>

                <div className="inventory-items">

                  <div>
                    <span>
                      Industrial Bearing
                    </span>

                    <strong>
                      1,240 units
                    </strong>
                  </div>

                  <div>
                    <span>
                      Hydraulic Pump
                    </span>

                    <strong>
                      420 units
                    </strong>
                  </div>

                  <div>
                    <span>
                      Drive Belt
                    </span>

                    <strong>
                      2,180 units
                    </strong>
                  </div>

                </div>

              </div>

            )}

            {/* SUPPLIERS */}

            {activePage === "Suppliers" && (

              <div className="module-card">

                <h3>
                  Supplier Network
                </h3>

                <p>
                  Monitor supplier reliability and
                  compare alternative suppliers.
                </p>

                <div className="supplier-items">

                  <div>
                    <strong>
                      Supplier S-204
                    </strong>

                    <span>
                      Reliability: 82%
                    </span>
                  </div>

                  <div>
                    <strong>
                      Supplier S-118
                    </strong>

                    <span>
                      Reliability: 96%
                    </span>
                  </div>

                  <div>
                    <strong>
                      Supplier S-305
                    </strong>

                    <span>
                      Reliability: 91%
                    </span>
                  </div>

                </div>

              </div>

            )}

            {/* TRACKING */}

            {activePage === "Tracking" && (

              <div className="module-card">

                <h3>
                  Shipment Tracking
                </h3>

                <p>
                  Track shipments and monitor delivery
                  progress in real time.
                </p>

                <div className="tracking-card">

                  <span>
                    ORD-1042
                  </span>

                  <strong>
                    🚚 In Transit
                  </strong>

                  <p>
                    Supplier → Distribution Center → Customer
                  </p>

                  <div className="tracking-line">
                    <span>✓</span>
                    <span>✓</span>
                    <span>●</span>
                    <span>○</span>
                  </div>

                </div>

              </div>

            )}

            {/* ANALYTICS */}

            {activePage === "Analytics" && (

              <div className="module-card">

                <h3>
                  Supply Chain Analytics
                </h3>

                <p>
                  Performance insights generated from
                  your supply chain data.
                </p>

                <div className="analytics-bars">

                  <div>
                    <span>On-Time Delivery</span>
                    <div>
                      <i style={{ width: "94%" }}></i>
                    </div>
                    <strong>94%</strong>
                  </div>

                  <div>
                    <span>Supplier Reliability</span>
                    <div>
                      <i style={{ width: "96%" }}></i>
                    </div>
                    <strong>96%</strong>
                  </div>

                  <div>
                    <span>Inventory Health</span>
                    <div>
                      <i style={{ width: "89%" }}></i>
                    </div>
                    <strong>89%</strong>
                  </div>

                </div>

              </div>

            )}

          </div>

        )}

      </main>

    </div>
  );
}

export default CompanyPortal;