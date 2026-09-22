---
title: Smart Factory
lang: ja
portfolio: true
alternate: /projects/smartfactory
cssclasses: [minimal-detail]
---

[← プロジェクト一覧](/ja/#projects)

# Smart Factory

収集からリアルタイム配信までの製造データ基盤

OPC UA · MQTT · TimescaleDB · Redis

## 課題と取り組み

設備データの収集、時系列保存、リアルタイム配信をつなぐ構成を研究し、プロトタイプの実装方針を設計しました。

## 担当範囲

アーキテクチャ整理、プロトコル分析、collector・storage・realtime・alertの構成設計。

## 検証結果と今後の課題

研究・プロトタイプ · 実運用および大規模な性能検証は未実施。

OPC UA / MQTT → TimescaleDB / Redis / WebSocketという流れを整理しました。実運用の安定性や大規模な負荷への対応は、今後の検証対象です。

## 技術ドキュメント

[設計・実装の詳細（韓国語）](/projects/smartfactory) · [仕様書（韓国語）](/projects/smartfactory/spec)
