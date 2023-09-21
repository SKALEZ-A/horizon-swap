import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidWallet } from "react-icons/bi";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import PieChartComponent from "../../components/dashboard/pieChart"; // Import the PieChartComponent

const Portfolio = () => {
  const address = useAddress();
  const [balance, setBalance] = useState("0");
  const [walletAddress, setWalletAddress] = useState(address);
  const [portfolioData, setPortfolioData] = useState([]);
  const [arbitrumDistribution, setArbitrumDistribution] = useState(null);

  // to show balance or not
  const [showBalance, setShowBalance] = useState(false);

  // Calculate the total portfolio value
  const totalPortfolioValue = portfolioData.reduce(
    (total, item) => total + item.value,
    0
  );

  // Create a data array for the pie chart
  const pieChartData = portfolioData.map((item) => ({
    name: item.assetName,
    value: (item.value / totalPortfolioValue) * 100, // Calculate percentage
  }));

  let cutAddress = "";
  if (address) {
    cutAddress = address.slice(0, 6) + "..." + address.slice(-4);
  }

  useEffect(() => {
    setWalletAddress(address);
  }, [address]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `/api/dashboard?walletAddress=${walletAddress}`
      );
      const data = response.data;

      if (data.error) {
        console.error("API Error:", data.error);
      } else {
        setPortfolioData(data); // Update the portfolioData state
        setBalance(data.balance);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  }, [walletAddress]);

  // Function to fetch data and update every X milliseconds
  const refreshData = useCallback(() => {
    fetchData(); // Fetch new data

    // Schedule the next data refresh after X minutes (adjust as needed)
    setTimeout(refreshData, 30000); // X minutes in milliseconds
  }, [fetchData]);

  useEffect(() => {
    if (walletAddress !== "") {
      fetchData();
    }
  }, [walletAddress, fetchData, refreshData]);

  useEffect(() => {
    if (!walletAddress) {
      return; // Do not fetch data if walletAddress is empty or not defined
    }

    // Add a timestamp as a query parameter to avoid caching
    const timestamp = Date.now();

    fetch(`/api/balance?walletAddress=${walletAddress}&timestamp=${timestamp}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the received data in the state
        setArbitrumDistribution(data.arbitrumDistribution);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [walletAddress]);

  // Calculate total 24-hour profit and percentage increase
  const total24hrProfit = portfolioData.reduce(
    (total, item) =>
      total + (item.changes ? parseFloat(item.changes.absolute_1d) : 0),
    0
  );

  const totalPercentageIncrease =
    (total24hrProfit / (totalPortfolioValue - total24hrProfit)) * 100;

  return (
    <div className="grid grid-cols-1 gap-8 m-3 items-center md:px-6 px-2 mx-auto  ">
      <div className="flex justify-between ">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 w-full justify-between ">
          {/* before connecting box */}
          {address ? (
            <>
              {/* first div box */}
              <div className="md:col-span-3 rounded-lg shadow-xl md:min-h-[18rem]  bg-[#1f1f1f] items-center grid-row-3 ">
                <div className="  justify-between p-3 flex">
                  <p className="text-gray-300">Token Allocation</p>
                  <span className="text-gray-600 rounded-2xl border p-2">
                    <BsThreeDots />
                  </span>
                </div>
                {/* Check if balance is zero or empty */}
                {parseFloat(arbitrumDistribution) === 0 ||
                arbitrumDistribution === "" ? (
                  <div className="flex items-center justify-center pb-3">
                    {/* empty wallet image */}
                    <Image
                      className=" rounded-xl "
                      src="/broke4.png"
                      alt="empty icon"
                      width={250}
                      height={250}
                    />
                  </div>
                ) : (
                  // Render the pie chart when the balance is not zero or empty
                  <div className="flex items-center justify-center pb-3">
                    <div className="pie_Chart m-auto">
                      <PieChartComponent data={pieChartData} />
                    </div>
                  </div>
                )}
              </div>

              {/* second div box */}
              <div className="md:col-span-4 rounded-lg shadow-xl grid-row-4 md:min-h-[18rem] bg-[#1f1f1f] flex justify-center flex-col items-center">
                <div className="flex flex-row p-3 gap-4 items-center justify-center">
                  {/* first inner box */}
                  <div className="rounded ">
                    {/* broke image icon`` */}
                    <div className="text-gray-300 p-1 rounded flex flex-col items-center justify-center">
                      <Image
                        className=" rounded-xl "
                        src="/mask.png"
                        alt="Horizon Logo"
                        width={150}
                        height={150}
                      />
                      <span className="bg-[#343434] p-2 rounded my-3 w-full text-center text-md flex gap-2 items-center cursor-pointer">
                        {cutAddress}
                        <IoIosArrowDown size={16} />
                      </span>
                    </div>
                  </div>
                  {/* second inner box */}
                  <div className="text-white flex items-center flex-col gap-y-4">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="p-1 rounded-lg  bg-[#1497337f] wallet-icon ">
                        <BiSolidWallet size={22} />
                      </div>
                      <h2 className="text-gray-400 text-sm md:text-md font-bold">
                        {" "}
                        Net Worth
                      </h2>

                      <div onClick={() => setShowBalance(!showBalance)}>
                        {/* Toggle visibility of balance when clicking on the eye ball symbol */}
                        <BsEyeSlash size={17} style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                    {/* Conditionally render the balance or asterisks */}
                    <h2 className="text-xl md:text-3xl">
                      {showBalance
                        ? `$${parseFloat(arbitrumDistribution).toFixed(4)}`
                        : "*".repeat(7)}{" "}
                      {/* Display 10 asterisks */}
                    </h2>
                    <div className="text-xs text-gray-500">
                      {/* percentage increase */}
                      <p>
                        24hr Gain: ${total24hrProfit.toFixed(4)} (
                        {totalPercentageIncrease.toFixed(2)}%)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-7 rounded-lg shadow-xl long md:min-h-[17rem] bg-[#1f1f1f] items-center flex justify-center">
                <h2 className="items-center text-gray-300 font-semibold text-2xl">
                  Connect your wallet to view portfolio !
                </h2>
              </div>
            </>
          )}
        </div>
      </div>

      {address ? (
        <>
          {/* ... (previous code for the top section) ... */}

          {/* ======== Holdings section ========== */}
          <div className="rounded-lg shadow-xl bg-[#1f1f1f] ">
            <div className="p-3 m-2">
              <div className="overflow-x-auto">
                <table className="min-w-full bgr text-white border-lg border-gray-600 rounded gap-4">
                  <thead className="text-white">
                    <tr>
                      <th className="py-2 px-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider left-0 bg-[#1f1f1f] z-10">
                        COIN
                      </th>
                      {[
                        "PRICE",
                        "HOLDINGS",
                        "AMOUNT",
                        "24hr Profit ($)",
                        "24hr Change (%)",
                      ].map((header, index) => (
                        <th
                          key={index}
                          className="py-2 px-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioData.map((item, index) => (
                      <tr key={index} className="gap-4 ">
                        <td className="py-4 px-3  text-left text-xs leading-4 font-medium text-gray-300 left-0 bg-[#1f1f1f] z-10">
                          <div className="flex items-center">
                            <img
                              src={item.icon}
                              alt={`${item.assetName} Icon`}
                              className="w-7 h-7 mr-2"
                            />
                            {item.assetName}
                          </div>
                        </td>
                        <td className="py-4 px-3 text-left text-xs leading-4 font-medium text-gray-300">
                          ${parseFloat(item.price).toFixed(3)}
                        </td>
                        <td className="py-4 px-3 text-left text-xs leading-4 font-medium text-gray-300">
                          {parseFloat(item.quantity).toFixed(4)}
                        </td>
                        <td className="py-4 px-3 text-left text-xs leading-4 font-medium text-gray-300">
                          ${parseFloat(item.value).toFixed(4)}
                        </td>
                        <td
                          className={`py-4 px-3 text-left text-xs leading-4 font-medium ${
                            item.changes && item.changes.absolute_1d < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {item.changes
                            ? `$ ${parseFloat(item.changes.absolute_1d).toFixed(
                                5
                              )}`
                            : "N/A"}
                        </td>

                        <td
                          className={`py-4 px-3 text-xs leading-4 font-medium text-gray-300 ${
                            item.changes && item.changes.percent_1d < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {item.changes
                            ? `${parseFloat(item.changes.percent_1d).toFixed(
                                3
                              )}`
                            : "N/A"}
                          %
                        </td>
                        {/* Add columns for "24hr," "24hr volume," and "Market cap" here */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Render the "Connect your wallet" message when the wallet is not connected
        <div className=" rounded-lg shadow-xl md:w-full  md:min-h-[17rem] bg-[#1f1f1f] items-center flex justify-center">
          <h2 className="items-center text-gray-300 font-semibold text-2xl">
            Connect your wallet to view portfolio !
          </h2>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

Portfolio.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
