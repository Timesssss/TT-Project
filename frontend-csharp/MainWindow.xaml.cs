using System;
using System.Diagnostics;
using System.IO;
using System.Windows;
using Microsoft.Web.WebView2.Core;

namespace frontend_csharp
{
    public partial class MainWindow : Window
    {
        private Process? reactProcess;

        public MainWindow()
        {
            InitializeComponent();
            StartReactApp();  // เรียก React อัตโนมัติ
            InitializeWebView();
        }

        private void StartReactApp()
        {
            try
            {
                string reactProjectPath = @"C:\Project\Kiosk\kiosk-react";  // ตั้งค่า path ของ React

                var startInfo = new ProcessStartInfo
                {
                    FileName = "cmd.exe",
                    Arguments = "/c npm start",
                    WorkingDirectory = reactProjectPath,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                };

                reactProcess = new Process { StartInfo = startInfo };
                reactProcess.Start();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Failed to start React: {ex.Message}");
            }
        }

        private async void InitializeWebView()
        {
            await webView.EnsureCoreWebView2Async();
            webView.Source = new Uri("http://localhost:3000");

            // ฟังข้อความจาก React
            webView.CoreWebView2.WebMessageReceived += WebView_WebMessageReceived;
        }

        private void WebView_WebMessageReceived(object sender, CoreWebView2WebMessageReceivedEventArgs e)
        {
            string message = e.TryGetWebMessageAsString();
            if (message == "exit")
            {
                reactProcess?.Kill();  // ปิด React ด้วย
                Application.Current.Shutdown();
            }
        }



    }
}