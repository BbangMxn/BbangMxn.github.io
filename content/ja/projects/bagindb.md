---
title: BagInDB
lang: ja
portfolio: true
alternate: /projects/bagindb
cssclasses: [minimal-detail]
---

[← プロジェクト一覧](/ja/#projects)

# BagInDB

参照中心のデータを独立したAPIへ

Rust · PostgreSQL · JSONB · Redis

## 課題と取り組み

機材・ブランドのデータを独立したドメインに分離。API、データモデル、Redisキャッシュ、JWT検証を実装しました。

## 担当範囲

ドメイン分離の判断、データモデル、Rust API、Redisキャッシュ、JWT検証、ドキュメント作成。

## 検証結果と今後の課題

個人プロジェクト · キャッシュ無効化と運用方針を改善中。

15以上のエンドポイントを整理。10ms以下の応答は目標値であり、達成済みの性能実績ではありません。

## 技術ドキュメント

[設計・実装の詳細（韓国語）](/projects/bagindb) · [仕様書（韓国語）](/projects/bagindb/spec)
