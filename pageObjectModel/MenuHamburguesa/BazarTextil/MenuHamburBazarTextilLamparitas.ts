import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLamparitas extends BasePage {

    readonly LAMPARITAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LAMPARITAS = this.page.locator('//a [@id="menu-item-category-lamparitas"]')
    }

    async clickBazarTextilLamparitas(): Promise<void> {
        await this.click(this.LAMPARITAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLamparitas(): Promise<void> {
        await this.clickBazarTextilLamparitas()
    }
}
